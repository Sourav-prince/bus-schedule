import React from 'react'
import { useImmer } from "use-immer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './Header'
import AgencyList from './AgencyList'
import '../assets/styles/index.css'

const Container = () => {
  const [state, setState] = useImmer({
    
  })

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
