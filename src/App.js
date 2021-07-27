import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Project />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
