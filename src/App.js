import React from 'react';
import Header from './components/Header/'
import Login from './components/Login'
import Users from './components/Users'
import User from './components/User'
import Groups from './components/Groups'
import Test from './components/Test'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/user/:user/:page" component={User}/>
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
  );
}
