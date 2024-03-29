import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-dark text-white">
        <div className="container">
          <nav className="navbar px-0 navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="p-3 text-decoration-none text-light">
                  home
                </Link>
                <Link to="/blog" className="p-3 text-decoration-none text-light">
                  blog
                </Link>
                <Link
                  to="/resources"
                  className="p-3 text-decoration-none text-light"
                >
                  resources
                </Link>
                <Link to="/about" className="p-3 text-decoration-none text-light">
                  about
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
