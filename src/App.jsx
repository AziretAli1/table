import { useState } from "react";
import { TableForm } from "./components/TableForm";
import { useSelector } from "react-redux";

function App() {
  const sostoyanie = useSelector((state) => console.log(state));
  // console.log(sostoyanie);
  // const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  // const handleMinus = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      {/* <p>{count}</p> */}
      <button onClick={handlePlus}>PLUS</button>
      {/* <button onClick={handleMinus} disabled={}>
        MINUS
      </button> */}
      <TableForm />
    </>
  );
}

export default App;
