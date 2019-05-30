import React from 'react'
import Layout from './Hoc/Loyout'
import { Switch , Route} from 'react-router-dom'
import Home from './Component/Home';


export default function Routes(props) {
  return (
    <Layout>
      <Switch>
        <Route exact component = {Home} path='/' />
      </Switch>
    </Layout>
  )
}
