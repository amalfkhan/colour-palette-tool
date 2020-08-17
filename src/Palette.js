import React, { Component } from 'react'
import ColourBox from './ColourBox'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css'

export default class Palette extends Component {
  constructor (props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }


  changeLevel (newLevel) {
    console.log(newLevel);
    this.setState({level : newLevel});
  }

  render() {
    const { colours } = this.props.palette;
    const { level } = this.state;

    const colourBoxes = colours[level].map(colour => (
      <ColourBox background={ colour.hex } name={ colour.name }/>
    ));

    return (
      <div className="Palette">
        <div className="slider">
          <Slider 
              defaultValue={ level }
              min={100} 
              max={900}
              step={100}
              onAfterChange={ this.changeLevel }
              trackStyle={{ backgroundColor: 'transparent' }}
              handleStyle={{ backgroundColor: 'green', outline: 'none', border: 'green', boxShadow: 'none' }}
              railStyle={{ height: 6 }}
            />
        </div>
        {/* nav */}
        <div className="Palette-colours">
          {colourBoxes}
        </div>
        {/* footer */}
      </div>
    )
  }
}