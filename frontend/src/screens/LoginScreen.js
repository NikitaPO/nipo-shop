import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const cartItems = useSelector((state) => state.cart).cartItems;
  const { loading, error, userInfo } = userLogin;

  let redirect =
    location.search && cartItems.length !== 0
      ? location.search.split("=")[1]
      : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Вход</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Введите email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Пароль:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Введите пароль"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">
              Вход
            </Button>
          </Form>
          <Row>
            <Col>
              Не зарегистрированы?&nbsp;&nbsp;
              <Link
                to={redirect ? `register?redirect=${redirect}` : "/register"}
              >
                Зарегистрироваться
              </Link>
            </Col>
          </Row>
        </>
      )}
    </FormContainer>
  );
};

export default LoginScreen;
