import React from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  let product = products.find((prod) => prod._id === match.params.id);
  let isInStock = product.countInStock > 0;

  return (
    <>
      <Row className="my-3">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Status:{" "}
              {isInStock ? (
                <span className="text-success">In stock</span>
              ) : (
                <span className="text-danger">Out of stock</span>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <b>${product.price}</b>
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
          <Button className={"btn-block btn-success"} disabled={!isInStock}>
            Add to card
          </Button>
        </Col>
      </Row>
      <Link type="button" className="btn btn-primary" to="/">
        Go back
      </Link>
    </>
  );
};

export default ProductScreen;
