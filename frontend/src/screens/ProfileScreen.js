import React from "react";
import { ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const userInfo = useSelector((state) => state.userLogin).userInfo;

  return userInfo ? (
    <>
      <Row>
        <h1>Профиль пользователя</h1>
      </Row>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3>Имя: {userInfo.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3>E-mail: {userInfo.email}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3>
            Роль:{" "}
            {userInfo.isAdmin ? (
              <span style={{ color: "#FB7153" }}>Администратор</span>
            ) : (
              <span style={{ color: "#D3FB53" }}>Посетитель</span>
            )}
          </h3>
        </ListGroup.Item>
      </ListGroup>
    </>
  ) : (
    <Row>
      <h3>
        Вы не авторизованы, <Link to={"/login"}> авторизоваться</Link>
      </h3>
    </Row>
  );
};

export default ProfileScreen;
