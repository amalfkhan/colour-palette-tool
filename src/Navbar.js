import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      format: 'hex',
      snackbarOpen : false,
    }
  
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  
  handleFormatChange (e) {
    this.setState({format : e.target.value, snackbarOpen : true});
    this.props.handleChange(e.target.value);
  }

  closeSnackbar () {
    this.setState ({ snackbarOpen: false});
  }

  render () {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    
    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'>Colour Palettes</Link>
        </div>
        <div className='slider-container'>
          <span className='level-indicator'>Level: {level}</span>
          <div className="slider">
            <Slider 
                defaultValue={ level }
                min={100} 
                max={900}
                step={100}
                onAfterChange={ changeLevel }
                trackStyle={{ backgroundColor: 'transparent' }}
                handleStyle={{ backgroundColor: 'green', outline: 'none', border: 'green', boxShadow: 'none' }}
                railStyle={{ height: 6 }}
              />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.closeSnackbar}
          message={
            <span id='message-id'>
              Format Changed To: {format.toUpperCase()}
            </span>
          }
          ContentProps={{'aria-describedby': 'message-id'}}
          action={[
            <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </header>

    )
  }

}