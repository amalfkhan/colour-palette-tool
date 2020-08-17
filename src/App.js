import React, { Component } from 'react';
import Palette from './Palette';
import SeedPalettes from './SeedPalettes';
import { generatePalette } from './colourHelpers'

class App extends Component {
  render () {
    return (
      <div>
        <Palette palette={generatePalette(SeedPalettes[4])}/>
      </div>
    );
  }

}

export default App;
 