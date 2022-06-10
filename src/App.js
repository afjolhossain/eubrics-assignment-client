import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
