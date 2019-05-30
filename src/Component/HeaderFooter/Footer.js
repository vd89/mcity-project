import React from 'react'
import { CityLogo } from '../ui/icons'


const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <CityLogo
          width='70px'
          height='70px'
          link={true}
          linkTo='/'
        />
      </div>
      <div className="footer_discl">
        Maschester City 2019. All right reserved
        </div>
    </footer>
  )
}

export default Footer
