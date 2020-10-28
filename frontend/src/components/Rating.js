import PropTypes from "prop-types";
import React from "react";

let borders = Array(5)
  .fill()
  .map((elem, index) => [index + 0.5, index + 1]);

const Rating = ({ value, text, color }) => (
  <div>
    {borders.map((border, index) => (
      <i
        key={index}
        style={{ color }}
        className={
          value >= border[1]
            ? "fas fa-star"
            : value >= border[0]
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    ))}
    <span className="pl-2">{text ? text : ""}</span>
  </div>
);

Rating.defaultProps = { value: 0, color: "#f8e825" };

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
