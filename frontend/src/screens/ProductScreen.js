import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  let [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${match.params.id}`)
      .then((res) => setProduct(res.data))
      .catch(() => console.log("Can't find product"));
  }, [match.params.id]);

  let isInStock = product.countInStock > 0;

  return (
    <>
      <Row className="my-3">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
          <Link type="button" className="btn btn-primary mt-3" to="/">
            Go back
          </Link>
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
    </>
  );
};

export default ProductScreen;
