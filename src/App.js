import React, { Component } from 'react';
import Palette from './Palette';
import SeedPalettes from './SeedPalettes';
import { generatePalette } from './colourHelpers'

class App extends Component {
  render () {
    console.log(generatePalette(SeedPalettes[4]))
    return (
      <div className="App">
        <Palette {...SeedPalettes[4]}/>
      </div>
    );
  }

}

export default App;
 