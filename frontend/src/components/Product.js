import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

export const Product = ({ product }) => {
  return (
    <Card className="card text-white bg-primary mb-3 rounded">
      <a href={`/product/${product.id}`}>
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
      </a>
    </Card>
  );
};
