import logo from "./logo.svg";
import Button from "./Components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
      </header>
    </div>
  );
}

export default App;
