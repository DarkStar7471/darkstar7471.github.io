import React, { Component } from "react";
import react from "react";

export default class NavBar extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      active: this.props.active,
    };
  }
  render() {
    return (
      <div class="navbar-dark text-white">
        <div class="container">
          <nav class="navbar px-0 navbar-expand-lg navbar-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a href="/" class="p-3 text-decoration-none text-light">
                  <div id="home">home</div>
                </a>
                <a href="/blog" class="p-3 text-decoration-none text-light">
                  <div id="blog">blog</div>
                </a>
                <a
                  href="/resources"
                  class="p-3 text-decoration-none text-light"
                >
                  <div id="resources">resources</div>
                </a>
                <a href="/about" class="p-3 text-decoration-none text-light">
                  <div id="about">about</div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
