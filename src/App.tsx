import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Login />
      </Router>
    </>
  );
}

export default App;
