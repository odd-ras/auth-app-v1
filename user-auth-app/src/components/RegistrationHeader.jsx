import Container from "react-bootstrap/Container";

import "../app.css";

export default function RegistrationHeader() {
  return (
    <div>
      <Container className="d-flex flex-column text-center text-white mb-4 ">
        <h1 className="display-3 fw-bold">MyApp.App</h1>
        <h2 className="display-5">Sign Up</h2>
      </Container>
    </div>
  );
}
