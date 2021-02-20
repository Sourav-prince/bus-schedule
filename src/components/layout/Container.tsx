import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './Header'
import AgencyList from '../agency/AgencyList'
import '../../assets/styles/index.css'

const Container = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Redirect exact from="/" to="/agency" />
        <Route path="/agency">
          <AgencyList/>
        </Route>
        <Route path="/about">
          hiiii
        </Route>
      </Switch>
    </Router>
  )
}

export default Container
