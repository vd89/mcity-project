import React, { Component } from 'react'
import {firebaseMatches} from '../../../FireBase'
import { firebaseLoop, reverseArray } from '../../ui/Misc';
import MatchesBlock from '../../ui/matches_block'
import Slide  from 'react-reveal/Slide';


export default class Blocks extends Component {
  state = {
    matches:[]
  }

  componentDidMount(){
    firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
      // console.log(snapshot.val())
      const matches = firebaseLoop(snapshot)
      // console.log(matches)
      this.setState({
        matches: reverseArray(matches)
      })
    })
  }
  showMatches = (matches)  => (

    matches ?
      matches.map((match)=>(
        <Slide bottom key = {match.id}>
          <div className="item">
            <div className="wrapper">
              <MatchesBlock match = {match}/>
            </div>
          </div>
        </Slide>
      ))
        :null
  )

  
 
  render() {
    // console.log(this.state)
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}





