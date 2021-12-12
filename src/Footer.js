import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div class="jumbotron bg-transparent mb-0 radius-0">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <h7 class="text-darkgrey text-mono my-2">
                    Copyright darkstar7471.com {new Date().getFullYear()}
                  </h7>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
