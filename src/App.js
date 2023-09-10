//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [active, setActive] = useState("active");

  const activeMode=(msg)=>{
    setActive(msg);
  }

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042644";
      document.body.style.color = "#ffffff";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#00272B";
    }
  };

  return (
    <>
      <Router>
          <Navbar title="TextSpace" mode={mode} toggleMode={toggleMode} active={active} activeMode={activeMode}/>
          <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Textform mode={mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
