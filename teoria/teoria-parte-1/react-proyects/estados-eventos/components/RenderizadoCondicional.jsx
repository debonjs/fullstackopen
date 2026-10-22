import { useState } from "react";
import Button from "./Button";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button press history: {props.allClicks.join(" ")}</div>;
};

const RenderizadoCondicional = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll((prevAllClicks) => prevAllClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
  };

  const handleRightClick = () => {
    setAll((prevAllClicks) => prevAllClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
  };

  const total = left + right;
  
  return (
    <div>
      {left}
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>*/}
      <Button onSmash={handleLeftClick } text='left'/>
      <Button onSmash={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks} />
      <p>Total {total}</p>
    </div>
  );
};

export default RenderizadoCondicional;
