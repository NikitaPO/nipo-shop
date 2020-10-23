import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="card text-white bg-primary mb-3 rounded">
      <Link to={`/products/${product._id}`}>
        <div className="card-header">{product.name}</div>
        <Card.Img src={product.image} variant="top" />
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h4 className="card-title mt-2">${product.price}</h4>
        </div>
      </Link>
    </Card>
  );
};

export default Product;
