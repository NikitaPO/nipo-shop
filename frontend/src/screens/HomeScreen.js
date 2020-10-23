import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch(() => console.log("Cant fetch products"));
  }, []);

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

export default HomeScreen;
