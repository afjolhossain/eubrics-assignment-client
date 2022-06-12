import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddItem from "./Pages/AddItem/AddItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="/AddItem/:servicesId" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
