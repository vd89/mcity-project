import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/Css/App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
<<<<<<< HEAD
import "./FireBase"
=======
import { firebase } from "./FireBase"
>>>>>>> bf56742fa6290195b6411bd397eebe880c995bdd

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  // console.log(user)
  ReactDOM.render(<App user = {user}/>, document.getElementById('root'));
})
