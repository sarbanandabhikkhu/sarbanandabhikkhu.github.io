import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import Dashboard from "./components/Dashboard";

import "./styles/sass/main.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/*" element={<PrivateOutlet />}>
        <Route exact path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
