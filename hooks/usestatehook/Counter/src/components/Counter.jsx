// import { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);

//   const onIncrementclick = () => {
//     setCount(count + 1);
//   };

//   const onDecrementclick = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1> Counter </h1>
//         <input type="text" value={count} readOnly/>
//         <button onClick={onIncrementclick}>Increment</button>
//         <button onClick={onDecrementclick}>Decremnet</button>
//       </div>
//     </>
//   );
// }

// counter using prop(passing property from parent to children)

import { useState } from "react";

export const Incrementbutton = ({ count, setcount }) => {
  const onIncrementclick = () => {
    setcount (count+1);
    // setcount (prev => prev + 1);
    // setcount (prev => prev + 1);
    // setcount (prev => prev + 1);
  };
  return <button onClick={onIncrementclick}>Increment</button>;
};

export const Decrementbutton = ({ count, setcount }) => {
  return <button onClick={() => setcount(count - 1)}>Decrement</button>;
};
