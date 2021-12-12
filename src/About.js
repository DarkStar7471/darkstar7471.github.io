import React, { Component } from "react";
import Header from "./Header";
import Logo from "./images/thm_logo_white.png";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <body>
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
                    <a
                      href="/about"
                      class="p-3 text-decoration-none text-light"
                    >
                      <div id="about">
                        <u>about</u>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="jumbotron bg-transparent mb-0 radius-0">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <Header />

                  <p class="mt-5 text-grey text-spacey">
                    Security Engineer <br />
                    <a
                      ref="https://tryhackme.com/p/DarkStar7471"
                      target="_blank"
                    >
                      Administrator and Content Director
                    </a>{" "}
                    for{" "}
                    <a href="https://tryhackme.com" target="_blank">
                      TryHackMe
                    </a>
                    .<br />
                    For questions and inquiries, please reach out at
                    jon[at]tryhackme.com
                    <br />
                    <br />
                    <br />
                    <img
                      src={Logo}
                      alt="TryHackMe Logo"
                      width="auto"
                      height="200"
                    ></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}
