import React, { Component } from 'react'
import {firebaseMatches} from '../../../FireBase'
import {firebaseLooper, reverseArray} from '../../ui/Misc'

import Slide from "react-reveal/Slide";
import MatchesBlock from '../../ui/matches_block';

export default class Blocks extends Component {
  state = {
    matches:[]
  }
  componentDidMount(){
    firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
      const matches = firebaseLooper(snapshot)
      this.setState({
        matches: reverseArray(matches)
      })
    })
  }
  showMatches = (matches)  => (
    matches? 
      matches.map((match) =>(
        <Slide buttom key={match.id} >
          <div className="item">
            <div className="wrapper">
              <MatchesBlock match={match}/>
            </div>
          </div>
        </Slide>
      ))
      : null
  )
 
  render() {
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}





