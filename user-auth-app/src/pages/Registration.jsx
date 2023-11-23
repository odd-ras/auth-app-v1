import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

import RegistrationHeader from "../components/RegistrationHeader";
import RegistrationForm from "../components/RegistrationForm";

export default function Registration() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckBoxClick = () => {
    //e.preventDefault();
    setIsChecked(!isChecked);
    //console.log("clicked");
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      email: event.target.value,
    });
  };

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      username: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      password: event.target.value,
    });
  };

  const handleCPasswordChange = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const reset = () => {
      setUser({
        email: "",
        username: "",
        password: "",
      });
      setConfirmPassword("");
      setIsChecked(!isChecked);
      setIsSubmitted(!isSubmitted);
    };

    const url = "http://localhost:3005/api/register";
    try {
      const response = await axios.post(url, user);
      console.log("Server Response:", response.data);
      response.data.message && reset();
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    isSubmitted && navigate("/login");
  }, [isSubmitted, navigate]);

  return (
    <Container fluid className="bg-warning vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col className="col-md-8 py-5">
          <RegistrationHeader />
          <RegistrationForm
            user={user}
            isChecked={isChecked}
            confirmPassword={confirmPassword}
            handleFormSubmit={handleFormSubmit}
            handleCPasswordChange={handleCPasswordChange}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleUsernameChange={handleUsernameChange}
            handleCheckBoxClick={handleCheckBoxClick}
          />
        </Col>
      </Row>
    </Container>
  );
}
