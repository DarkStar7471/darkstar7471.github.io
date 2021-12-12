import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <head></head>
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
                      <div id="home">
                        <u>home</u>
                      </div>
                    </a>
                    <a href="/blog" class="p-3 text-decoration-none text-light">
                      blog
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
                  <h1 class="display-2">
                    [darksec<span class="vim-caret">]</span>
                  </h1>
                  <div class="text-mono"></div>

                  <div class="text-darkgrey text-mono my-2">
                    Infosec Training Resources
                  </div>

                  <p class="mt-5 text-grey text-spacey">
                    Information security training resources provided free of
                    charge for the sake of learning. Visit{" "}
                    <a href="/resources">resources</a> for links to associated
                    cloud hosting on{" "}
                    <a href="https://tryhackme.com" target="_blank">
                      TryHackMe
                    </a>{" "}
                    for many of the provided virtual machines. Direct downloads
                    to the virtual machines, worksheets, and answer keys can be
                    found in <a href="/resources">resources</a> as well.
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
