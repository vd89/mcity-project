import React from 'react'
import Featured from './Featured'
import MatchesHome from './Matches';
const Home = () => {
  return (
    <div>
      <div className="bck_blue">
        <Featured/>
        <MatchesHome/>
      </div>
    </div>
  )
}

export default Home
