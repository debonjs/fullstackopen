import { useState } from "react";

const EstadoComplejo = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      left: clicks.left + 1,
    }));
  };

  const handleRightClick = () => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      right: clicks.right + 1,
    }));
  };

  return (
    <div style={{ display: "flex", gap: "8px", fontSize: "24px" }}>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  );
};

export default EstadoComplejo;
