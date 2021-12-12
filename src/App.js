import "./App.css";
import "./bootstrap4-neon-glow.css";
import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Resources from "./Resources";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            caseSensitive={false}
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/blog"
            caseSensitive={false}
            element={<Blog />}
          ></Route>
          <Route
            exact
            path="/resources"
            caseSensitive={false}
            element={<Resources />}
          ></Route>
          <Route
            path="/about"
            caseSensitive={false}
            element={<About />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
