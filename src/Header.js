import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 class="display-2">
          [darksec<span class="vim-caret">]</span>
        </h1>
        <div class="text-mono"></div>

        <div class="text-darkgrey text-mono my-2">
          Infosec Training Resources
        </div>
      </React.Fragment>
    );
  }
}
