import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./css/style.css";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import Register from "./Routes/Register";
import Contest from "./Routes/Contest";

function App() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login" || location.pathname === '/reset-password') {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);
  return (
    <>
      <div className="app">
        {showNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
