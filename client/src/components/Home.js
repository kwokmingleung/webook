import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"; 
import Customers from './customers';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is the home page.</h1>
          <Link to="/signup"><Button variant="primary">Sign Up</Button>{' '}</Link>
      </div>
    );
  }
}

export default Home;