import React, { Component } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { CityLogo } from '../ui/icons';
import {Link } from 'react-router-dom'





export default class Header extends Component {
  render() {
    return (
      <AppBar 
        position = 'fixed' 
        style = {{
          background : '#98c5e9',
          boxShadow:'none',
          padding : '10px 0',
          borderButtom : '2px solid #00285c'
        }}
      >
        <Toolbar style={{display:'flex'}}>
          <div style={{flexGrow:1}}>
            <div className="header_logo">
              <CityLogo link ={true} linkTo='/' width ='70px' height='70px' />
            </div>
          </div>
          <Link to='/the_team'>
            <Button color= 'inherit'>The Team</Button>
          </Link>  
          <Link to='/the_matches'>
            <Button color='inherit'>Matches</Button>
          </Link>
        </Toolbar>

      </AppBar>
    )
  }
}
