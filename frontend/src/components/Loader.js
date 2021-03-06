import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="staus"
      variant="light"
      style={{
        width: "100px",
        height: "100px",
        margin: "50px auto",
        display: "block",
      }}
    >
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  );
};

export default Loader;
