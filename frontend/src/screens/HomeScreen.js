import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { listProducts } from "../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="mb-3">Latest products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col xl={3} lg={4} md={6} sm={12} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
