import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { signIn } from "next-auth/react";

const LoginBox = () => {
  return (
    <div className="login-box-size">
      <Container>
        <h1 className="text-center">Login</h1>
        <Form>
          <Row>
            <Form.Group
              className="mb-3 mw-50 fw-bold p-2"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3 fw-bold p-2"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <div
            className="text-center btn-custom square border border-dark d-grid
            gap-2"
          >
            <Button
              className="fs-5"
              variant="custom"
              onClick={() => signIn("spotify", { callbackUrl: "/home" })}
            >
              Login
            </Button>{" "}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default LoginBox;
