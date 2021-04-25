import React from "react";
import { useEffect } from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  console.log("orders", orders);

  return (
    <>
      <Row>
        <h1>Страница заказов</h1>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Row>
          <Message variant="danger">{error}</Message>
        </Row>
      ) : (
        <Row>
          <ListGroup>
            <ListGroup.Item key="0">
              <Row>
                <Col>Статус</Col>
                <Col>Цена</Col>
                <Col>Количество товаров</Col>
                <Col>Номер заказа</Col>
              </Row>
            </ListGroup.Item>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <ListGroup.Item key={order._id}>
                  <Row>
                    <Col>
                      <Image src="/images/order.jpg" width="50px" fluid />
                    </Col>
                    <Col>{order.totalPrice + "$"}</Col>
                    <Col>
                      {order.orderItems.reduce(
                        (sum, item) => (sum += item.quantity),
                        0
                      )}
                    </Col>
                    <Col>{order._id.slice(-3)}</Col>
                  </Row>
                </ListGroup.Item>
              ))
            ) : (
              <></>
            )}
          </ListGroup>
        </Row>
      )}
    </>
  );
};

export default OrderScreen;
