import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductsDetails } from "../actions/productsActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MinMaxInput from "../components/MinMaxInput";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  let isInStock;
  if (product) isInStock = product.countInStock > 0;

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
              <ListGroup.Item>{product.description}</ListGroup.Item>
              <ListGroup.Item>
                <MinMaxInput
                  min={1}
                  max={product.countInStock}
                  placeholder={1}
                />
              </ListGroup.Item>
            </ListGroup>
            <Button className={"btn-block btn-success"} disabled={!isInStock}>
              Add to card
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
