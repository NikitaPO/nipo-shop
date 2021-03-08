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
      setMessage("Пароли не совпадают");
    } else {
      setMessage(null);
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Зарегистрироваться</h1>

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
              <Form.Label>Имя:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Введите имя"
              />
            </Form.Group>

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

            <Form.Group controlId="confirmPassword">
              <Form.Label>Подтвердите пароль:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Подтверждение пароля"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">
              Зарегистрироваться
            </Button>

            <Row>
              <Col>
                Уже есть аккаунт?&nbsp;&nbsp;
                <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
                  Войти
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
