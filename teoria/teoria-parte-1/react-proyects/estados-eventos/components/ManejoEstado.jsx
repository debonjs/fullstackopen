import { useState } from "react";

const ManejoEstado = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);
  console.log("ok", counter);
  return (
    <div>
      {/* <Greetings />*/}
      {counter}
    </div>
  );
};

export default ManejoEstado;
