import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import BotDisplay from "./Components/BotDisplay";
import ArmyBots from "./Components/ArmyBots";
import { useState } from "react";
import Enlisted from "./Components/Enlisted";

function App() {
  const [enlist, setEnlist] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BotDisplay" element={<BotDisplay />} />
          <Route
            path="/ArmyBots/:id"
            element={<ArmyBots setEnlist={setEnlist} enlist={enlist} />}
          />
          <Route
            path="/Enlisted/"
            element={<Enlisted setEnlist={setEnlist} enlist={enlist} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
