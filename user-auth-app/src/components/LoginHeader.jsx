import { Container } from "react-bootstrap";

import "../app.css";

import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <Container className="d-flex flex-column text-center text-white mb-4">
      <h1 className="display-4 fw-bold">WELCOME BACK!</h1>
      <h2 className="">
        Dont have an account, <Link to="/registration">Sign up</Link>{" "}
      </h2>
    </Container>
  );
}
