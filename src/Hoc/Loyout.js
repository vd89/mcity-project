import React from 'react'
import Header from '../Component/HeaderFooter/Header';
import Footer from '../Component/HeaderFooter/Footer';

export default function Loyout(props) {
  return (
    <div>
      <Header/>

      {props.children} 
      <Footer/>
    </div>
  )
}
