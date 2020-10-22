import React from "react";
import { Col, Row } from "react-bootstrap";
import { Product } from "../components/Product";
import products from "../products";

export const HomesScreen = () => {
  return (
    <>
      <h1 className="mb-3">Latest products</h1>
      <Row>
        {products.map((product, index) => (
          <Col xl={3} lg={4} md={6} sm={12} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
