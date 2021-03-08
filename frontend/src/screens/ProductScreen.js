import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductsDetails } from "../actions/productsActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  let isInStock;
  if (product) isInStock = product.countInStock > 0;
  let items = 5;
  if (product.countInStock < 5) {
    items = product.countInStock;
  }

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${quantity}`);
  };

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [match, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="my-3">
          <Col md={6} lg={6}>
            <Image src={product.image} alt={product.name} fluid />
            <Link type="button" className="btn btn-primary mt-3" to="/">
              Назад
            </Link>
          </Col>
          <Col md={6} lg={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} ${
                    product.numReviews % 10 === 1 ? " оценка" : " оценок"
                  }`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Статус:{" "}
                {isInStock ? (
                  <span className="text-success">Есть на складе</span>
                ) : (
                  <span className="text-danger">Нет на складе</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} lg={3}>
            <ListGroup.Item>
              Цена: <b>${product.price}</b>
            </ListGroup.Item>

            {isInStock && (
              <ListGroup.Item>
                <Row>
                  <Col>Количество: </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(items).keys()].map((e) => (
                        <option key={e + 1} value={e + 1}>
                          {e + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <Button
              onClick={addToCardHandler}
              className={"btn-block btn-success"}
              disabled={!isInStock}
            >
              Добавить в корзину
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
