import React from 'react'
import Featured from './Featured'
import MatchesHome from './Matches';
import MeetPlayers from './MeetPLayers';
import Promotion from './Promotional';



const Home = () => {
  return (
    <div>
      <div className="bck_blue">
        <Featured/>
        <MatchesHome/>
        <MeetPlayers/>
        <Promotion/>
      </div>
    </div>
  )
}

export default Home
