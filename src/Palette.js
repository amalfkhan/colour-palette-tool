import React, { Component } from 'react'
import ColourBox from './ColourBox'
import Navbar from './Navbar'
import './Palette.css'

export default class Palette extends Component {
  constructor (props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel (newLevel) {
    console.log(newLevel);
    this.setState({level : newLevel});
  }

  changeFormat (val) {
    this.setState({ format : val})
  }

  render() {
    const { colours, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colourBoxes = colours[level].map(colour => (
      <ColourBox background={ colour[format] } name={ colour.name } key={ colour.id }/>
    ));

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
        <div className="Palette-colours">
          {colourBoxes}
        </div>
        <footer className='Palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    )
  }
}