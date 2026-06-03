import React from "react";
import { useState } from "react";
import "./App.css";
// import { Incrementbutton, Decrementbutton } from "./components/Counter";
import Filterbrand from "./components/Filterbrand";

const App = () => {
  // const [count, setcount] = useState(0);
  return (
    <div className="">
      <Filterbrand />
      {/* <Incrementbutton count={count} setcount={setcount} />
      <span>the value is {count}</span>
      <Decrementbutton count={count} setcount={setcount} /> */}
    </div>
  );
};

export default App;
