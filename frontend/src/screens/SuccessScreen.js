import React from "react";
import { Link } from "react-router-dom";

const SuccessScreen = () => {
  return (
    <>
      <h1 className="mb-3">Заказ успешно оформлен!</h1>
      Перейти на <Link to="/order">страницу заказов</Link>
    </>
  );
};

export default SuccessScreen;
