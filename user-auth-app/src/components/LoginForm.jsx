import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../app.css";

//import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function LoginForm({
  userData,
  handleUsernameEntry,
  handlePasswordEntry,
  handleSubmit,
  isChecked,
  handleRadioCheck,
}) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-sm-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="123user"
                required
                value={userData.username}
                onChange={handleUsernameEntry}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                required
                value={userData.password}
                onChange={handlePasswordEntry}
              />
            </Form.Group>
            <div className="d-flex flex-row justify-content-between align-items-center my-1 p-2">
              <Form.Check
                type="checkbox"
                label="Remember me"
                required
                checked={isChecked}
                onChange={handleRadioCheck}
              />

              <p>
                <Link to="#">Forgot Password?</Link>{" "}
              </p>
            </div>

            <div className="d-grid mt-4">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
            <p className="text-center my-4">or continue with</p>
            <div className="d-flex flex-row justify-content-around">
              <div className="border border-secondary border-3 rounded">
                <FontAwesomeIcon icon={faGoogle} size="6x" />
              </div>
              <div className="border border-secondary border-3 rounded">
                <FontAwesomeIcon icon={faFacebook} size="6x" />
              </div>
              <div className="border border-secondary border-3 rounded">
                <FontAwesomeIcon icon={faGithub} size="6x" />
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
