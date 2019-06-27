import React from 'react'
import Layout from './Hoc/Loyout'
import { Switch } from 'react-router-dom'


import Home from './Component/Home';
import SignIn from './Component/Signin';


import Dashboard from './Component/Admin/Dashboard';
import PrivateRoutes from './Component/AuthRoutes/privateRoutes';
import PublicRoutes from './Component/AuthRoutes/publicRoutes';



export default function Routes(props) {
  // console.log(props );
  return (
    <Layout>
      <Switch>

        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted = {false} path = "/sign_in" exact component ={SignIn}/>
        <PublicRoutes {...props} restricted = {false} path = "/" exact component ={Home}/>
      </Switch>
    </Layout>
  )
}
