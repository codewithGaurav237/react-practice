import "./App.css";
import profileImg from "./assets/gaurav.jpeg";

function App() {
  const name = "Gaurav Keshri";
  const role = "Frontend Developer";
  const city = "Gaya Ji , Bihar";
  const btn = "follow Me";
  const skills = " HTML , CSS , JavaScript ";
  return (
    <div className="profile-card">
      <img src={profileImg} alt="Gaurav" className="profile-img" />
      <h1>{name}</h1>
      <h3>{role} </h3>
      <p>I build modern web applications using React.</p>
      <p>{city}</p>
      <p>my skills : {skills}</p>
      <a href="https://www.linkedin.com/in/gaurav-kumar-keshri-8878b12b7/" target="_blank">
        <button>{btn}</button>
      </a>
    </div>
  );
}

export default App;
