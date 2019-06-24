import React from 'react'
import Layout from './Hoc/Loyout'
import { Switch , Route} from 'react-router-dom'


import Home from './Component/Home';
import SignIn from './Component/Signin';


import Dashboard from './Component/Admin/Dashboard';



export default function Routes(props) {
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path='/dashboard' />
        <Route exact component={SignIn} path='/sign_in' />
        <Route exact component = {Home} path='/' />
      </Switch>
    </Layout>
  )
}
