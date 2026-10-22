import { useState } from "react";

// Solución 1: Variables intermedias (El enfoque didáctico del curso)
// Para que setTotal use el número correcto, primero debes calcular el nuevo valor en una
// variable normal de JavaScript dentro de tu manejador y luego pasársela a las funciones de
//  estado.

// Solución 2: Estado Derivado (La mejor práctica definitiva en React)
// En la industria, existe una regla estricta: si un valor se puede calcular a partir de
// otros estados existentes, no debes crear un nuevo useState para él.

const ManejoArrays = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  // const [total, setTotal] = useState(0); // se elimina ya que es mejor usar variables de estado derivado

  const handleLeftClick = () => {
    setAll((prevAllClicks) => prevAllClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    // setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll((prevAllClicks) => prevAllClicks.concat("R"));
    // setRight((prevRight) => prevRight + 1);
    // setTotal((prevTotal) => right + left);
    const updatedRight = right + 1;
    setRight(updatedRight);
    // setTotal(updatedRight + left);
  };

  // ESTADO DERIVADO: Se calcula automáticamente en cada renderizado
  const total = left + right;
  // Alternativa válida: const total = allClicks.length;
  // 
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join("-> ")}</p>
      <p>Total {total}</p>
    </div>
  );
};

export default ManejoArrays;
