// import logo from './logo.svg';
import "./App.css";
import About from './Component/About';
import Navbar from "./Component/Navbar";
import Alert from "./Component/Alert";
import TextForm from "./Component/TextForm";
import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#17152a";
      showAlert("Dark Mode has been enabled","success")
     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success")

    }
  };

  return (
    <>
      <Router>
      <Navbar
        title="My Site"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About MySite"
        homeText="Go To Home"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                mode={mode}
                showAlert={showAlert}
                heading="Enter the text to analyze"
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
