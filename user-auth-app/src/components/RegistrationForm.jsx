/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import "../app.css";

function RegistrationForm({
  user,
  confirmPassword,
  handleEmailChange,
  handleUsernameChange,
  handlePasswordChange,
  handleCPasswordChange,
  handleFormSubmit,
  handleCheckBoxClick,
  isChecked,
}) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-sm-8">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={handleEmailChange}
                value={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                required
                onChange={handleUsernameChange}
                value={user.username}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                minLength="8"
                required
                onChange={handlePasswordChange}
                value={user.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                minLength="8"
                required
                onChange={handleCPasswordChange}
                value={confirmPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree with the Terms and Privacy"
                required
                checked={isChecked}
                onChange={handleCheckBoxClick}
              />
            </Form.Group>
            <Container className="d-grid gap-2">
              <Button variant="primary" type="submit" className="rounded-pill">
                Sign Up
              </Button>
              <p className="text-center">
                Already have an account? <Link to="/login">Login</Link>{" "}
              </p>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationForm;
