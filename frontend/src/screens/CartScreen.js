import React, { useEffect } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const quantity = location.search ? +location.search.split("=")[1] : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const checkoutHandler = () => {
    history.push(`/login?redirect=shipping`);
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <Row>
      <Col sm={12} lg={8}>
        <h1>Корзина покупокt</h1>
        {cartItems.length > 0 ? (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.name}>
                <Row>
                  <Col sm={2} lg={2}>
                    <Image src={item.image} alt={item.name} fluid />
                  </Col>
                  <Col sm={4} lg={4}>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col sm={2} lg={2}>
                    {"$" + item.price}
                  </Col>
                  <Col sm={2} lg={2}>
                    <Form.Control
                      as="select"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((e) => (
                        <option key={e + 1} value={e + 1}>
                          {e + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col sm={2} lg={1}>
                    <Button
                      type="button"
                      onClick={() => removeHandler(item.product)}
                    >
                      <i className="fa fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Message>
            Ваша корзина пуста, <Link to="/">вернуться назад</Link>
          </Message>
        )}
      </Col>
      <Col sm={12} lg={4}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{`Subtotal (${cartItems.reduce(
              (acc, item) => acc + +item.quantity,
              0
            )}) items`}</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            Итоговая сумма:
            <b>
              {" $"}
              {cartItems
                .reduce((acc, item) => acc + +item.quantity * +item.price, 0)
                .toFixed(2)}
            </b>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems === 0}
              onClick={checkoutHandler}
            >
              Перейти к оформлению
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CartScreen;
