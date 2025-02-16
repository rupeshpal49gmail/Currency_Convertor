import { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./components/Currency";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CurrencyConvertor />
    </>
  );
}

export default App;
