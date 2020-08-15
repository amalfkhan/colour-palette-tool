import React, { Component } from 'react'
import ColourBox from './ColourBox'
import './Palette.css'

export default class Palette extends Component {
  render() {
    const colourBoxes = this.props.colours.map(colour => (
      <ColourBox background={colour.colour} name={colour.name}/>
    ));

    return (
      <div className="Palette">
        {/* nav */}
        <div className="Palette-colours">
          {colourBoxes}
        </div>
        {/* footer */}
      </div>
    )
  }
}