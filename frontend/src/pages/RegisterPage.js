import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userAction";

const RegisterPage = ({ history, location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const querParams = new URLSearchParams(location.search);
  const redirect = querParams.get("redirect")
    ? querParams.get("redirect")
    : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  
  console.log(userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo && Object.entries(userInfo).length > 0) {
      history.push(redirect);
    }
  }, [ userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("passwords do not match");
    }
    dispatch(register(name, email, password));
  };
  return (
    <FormContainer>
      <h1>Sign up</h1>
      {message && <Message varient="danger">{message}</Message>}
      {error && <Message varient="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="enterEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label> password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enterPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          sign up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
