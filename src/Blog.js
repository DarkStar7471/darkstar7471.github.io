import React, { Component } from "react";
import Header from "./Header";

export default class Blog extends Component {
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
                      <div id="blog">
                        <u>blog</u>
                      </div>
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
                      <div id="about">about</div>
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
                    VG8gYmUgYWRkZWQgc2hvcnRseS4=
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
