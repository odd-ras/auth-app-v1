import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleRadioCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleUsernameEntry = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      username: event.target.value,
    });
  };

  const handlePasswordEntry = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const reset = () => {
    setUserData({
      username: "",
      password: "",
    });
    setIsSubmitted(!isSubmitted);
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3005/api/login";
    try {
      const response = await axios.post(url, userData);
      console.log("Server response: ", response.data);
      response.data.message && reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isSubmitted && navigate("/");
  }, [isSubmitted, navigate]);

  return (
    <Container fluid className="bg-warning vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col className="col-md-8 py-5">
          <LoginHeader />
          <LoginForm
            userData={userData}
            handleUsernameEntry={handleUsernameEntry}
            handlePasswordEntry={handlePasswordEntry}
            handleSubmit={handleSubmit}
            handleRadioCheck={handleRadioCheck}
            isChecked={isChecked}
          />
        </Col>
      </Row>
    </Container>
  );
}
