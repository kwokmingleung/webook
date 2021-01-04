import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Customers from "./customers";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is the sign up page.</h1>
        <Link to="/">
          <Button variant="primary">Home</Button>{" "}
        </Link>
        <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with the details and conditions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
