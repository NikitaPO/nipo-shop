import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sing Up</h1>

      {message ? (
        <Message variant="danger">{message}</Message>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : null}

      {loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter password"
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm password:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm password"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">
              Register
            </Button>

            <Row>
              <Col>
                Have an account?&nbsp;&nbsp;
                <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
                  Login
                </Link>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </FormContainer>
  );
};

export default RegisterScreen;
