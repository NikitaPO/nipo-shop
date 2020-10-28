import React, { useEffect, useState, useRef } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const MinMaxInput = ({ min, max, placeholder }) => {
  const [count, setCount] = useState(placeholder);
  const increaseBtn = useRef();
  const decreaseBtn = useRef();

  useEffect(() => {
    if (count >= max) {
      increaseBtn.current.disabled = true;
    } else if (count <= min) {
      decreaseBtn.current.disabled = true;
    } else {
      increaseBtn.current.disabled = false;
      decreaseBtn.current.disabled = false;
    }
  }, [count, max, min]);

  return (
    <InputGroup style={{ justifyContent: "center" }}>
      <InputGroup.Prepend>
        <Button ref={decreaseBtn} onClick={() => setCount(count - 1)}>
          -
        </Button>
      </InputGroup.Prepend>
      <FormControl
        className="text-center"
        style={{ fontWeight: "bold", maxWidth: "100px" }}
        placeholder={placeholder}
        value={count}
        readOnly
      />
      <InputGroup.Append>
        <Button ref={increaseBtn} onClick={() => setCount(count + 1)}>
          +
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default MinMaxInput;
