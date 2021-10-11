import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { getUserDtails, updateUserProfile } from "../actions/userAction";

const ProfilePage = ({ history, location }) => {
  const [message, setMessage] = useState(null);
  const querParams = new URLSearchParams(location.search);


  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {success  } = userUpdateProfile;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
  console.log("profile");
    if (!userInfo || Object.entries(userInfo).length < 1) {

      history.push('/login');
    } else {
        console.log(user);
        console.log();
        console.log(!user);
      if (!user || Object.entries(user).length <1  ) {
          console.log("aaa");
        dispatch(getUserDtails());
      } else {
          console.log(user)
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch,history, userInfo, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("passwords do not match");
      return;
    }
    //dispatch(register(name, email, password));
    dispatch(updateUserProfile({id:user._id,name,email,password}))
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message varient="danger">{message}</Message>}
        {error && <Message varient="danger">{error}</Message>}
        {success && <Message varient="success">profile Updated</Message>}
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
      </Col>
      <Col md={9}></Col>
    </Row>
  );
};

export default ProfilePage;
