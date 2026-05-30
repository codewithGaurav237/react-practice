import Header from "./assets/components/Header";
import UserCard from "./assets/components/UserCard";
import Counter from "./assets/components/Counter";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <UserCard name="Gaurav" age={21} role="Frontend Developer" />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
