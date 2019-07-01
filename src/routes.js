import React from 'react'
import Layout from './Hoc/Loyout'
import { Switch } from 'react-router-dom'


import Home from './Component/Home';
import SignIn from './Component/Signin';


import Dashboard from './Component/Admin/Dashboard';
import PrivateRoutes from './Component/AuthRoutes/privateRoutes';
import PublicRoutes from './Component/AuthRoutes/publicRoutes';
import AdminMatches from './Component/Admin/Matches';
import AddEditMatch from './Component/Admin/Matches/addEditMatch';



export default function Routes(props) {
  // console.log(props );
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={false} path="/sign_in" exact component={SignIn} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}
