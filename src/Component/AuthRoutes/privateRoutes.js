import React from 'react'
import { Route, Redirect } from "react-router-dom";
const PrivateRoutes = ({
  user,
  component: Comp,
  ...reset
}) => {
  return (
    <Route {...reset} component={(props) => (
      user ? 
      <Comp {...props} user={user} />
        // <Redirect to ='/'/>
        :        
      <Redirect to='/sign_in' />
    )} />
  )
}

export default PrivateRoutes
