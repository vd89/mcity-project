import React from 'react'
import Featured from './Featured'
import MatchesHome from './Matches';
import MeetPlayers from './MeetPLayers';
const Home = () => {
  return (
    <div>
      <div className="bck_blue">
        <Featured/>
        <MatchesHome/>
        <MeetPlayers/>
      </div>
    </div>
  )
}

export default Home
