import "./App.css";
//array rendering

// function App() {
//   const fruits = ["apple" ,"banana", "mango"];
//   return (
//     <div>
//       {fruits.map((fruit,index) => (
//         <p key = {index}>{fruit}</p>
//       ))}
//     </div>
//   )
// }

//object rendering

// function App() {
//   const users = [
//     { id: 1, name: "jain", role: "frontend developer" },
//     { id: 2, name: "jack", role: "backend developer" },
//   ];
//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h1>{user.name}</h1>
//           <p>{user.role}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// conditional rendering if/else

// function App() {
//   const isloggedIn = false;
//   if (isloggedIn) {
//     return <h2>welcome back!</h2>;
//   } else {
//     return <button>login</button>;
//   }
// }

// conditional rendering ternary operator(most common)

// function App() {
//   const isloggedIn = true;
//   return (
//     <div>{isloggedIn ? <h1>Welcome Back!</h1> : <button>Login</button>}</div>
//   );
// }

//conditional rendering &&

// function App() {
//   const isloggedIn = true;
//   return (
//     <div>{isloggedIn && <h1>You already Login.</h1>}</div>
//   );
// }

// export default App;
