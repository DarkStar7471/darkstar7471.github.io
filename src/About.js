import React, { Component } from "react";
import Header from "./Header";
import Logo from "./images/thm_logo_white.png";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <body>
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
