import React from 'react'
import { Tag } from '../../ui/Misc';
import Blocks from './Blocks';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">

        <Tag
          bck="#0e1731"
          size="50px"
          color="#ffffff"
        >
          Matches
        </Tag>
<<<<<<< HEAD

=======
>>>>>>> bf56742fa6290195b6411bd397eebe880c995bdd
        <Blocks/>

        <Tag bck="#ffffff" size=" 22px" color="#0e1731" link={true} linkto="/the_team" >See More Matches</Tag>
      </div>
    </div>
  )
}

export default MatchesHome
