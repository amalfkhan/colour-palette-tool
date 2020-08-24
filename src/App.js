import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SeedPalettes from './SeedPalettes';
import PaletteList from './PaletteList'
import { generatePalette } from './colourHelpers'

class App extends Component {
  findPalette (id) {
    return SeedPalettes.find(function(palette) {
      return palette.id === id;
    });
  }

  render () {
    return (
      <Switch>
        <Route 
          exact 
          path='/' 
          render={(routeProps) => <PaletteList palettes={SeedPalettes} {...routeProps}/>}
        />
        <Route 
          exact 
          path='/palette/:id' 
          render={(routeProps) => (
            <Palette 
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(SeedPalettes[4])}/>
      // </div>
    );
  }

}

export default App;