import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
