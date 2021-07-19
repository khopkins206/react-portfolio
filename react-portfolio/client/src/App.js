import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/discover" component={Discover} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
