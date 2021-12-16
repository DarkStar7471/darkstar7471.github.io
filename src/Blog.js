import React, { Component } from "react";
import Header from "./Header";

export default class Blog extends Component {
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
