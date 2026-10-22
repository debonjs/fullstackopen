import { useState } from "react";
import Button from "./Button";

const ControlEventos = () => {
  const [counter, setCounter] = useState(0);
  
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleDecrement = () => setCounter((prevCounter) => prevCounter - 1);
  const handleReset = () => setCounter(0);

  return (
    <div>
      <h2>{counter}</h2>

      <Button onSmash={handleIncrement} text="+" />
      <Button onSmash={handleReset} text="Reset" />
      <Button onSmash={handleDecrement} text="-" />
    </div>
  );
};

export default ControlEventos;
