import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header'
import AgencyBusList from '../common/AgencyBusList'
import '../../assets/styles/index.css'

const Container = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/:agencyName">
          <AgencyBusList/>
        </Route>
        <Route path="/">
          <AgencyBusList/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Container
