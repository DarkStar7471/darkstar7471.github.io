import React, { Component } from "react";
import Header from "./Header";

export default class Resources extends Component {
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
                      <div id="resources">
                        <u>resources</u>
                      </div>
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
                    <ul>
                      <li>
                        <b>TryHackMe Rooms</b>
                      </li>
                      <ul>
                        <li>
                          <a
                            href="https://tryhackme.com/room/blue"
                            target="_blank"
                          >
                            <i>Blue</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=11f_wsW59Dh1fGvQCNUPK70lIWzlcg44_">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/ice"
                            target="_blank"
                          >
                            <i>Ice</i>
                          </a>{" "}
                          -{" "}
                          <a
                            href="https://drive.google.com/open?id=19DnNlNWzNVSwiBYz5mxPWRPCWQmINzmz"
                            target="_blank"
                          >
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/ignite"
                            target="_blank"
                          >
                            <i>Ignite</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=1GgXEDgld7af41JW90hPcqncIUEqrRj0G">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/joystick"
                            target="_blank"
                          >
                            <i>JoyStick</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=1SCUMQwMAkJSfWHc4nkbB7WmWWrrqtOoJ">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/retro"
                            target="_blank"
                          >
                            <i>Retro</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=1LTAeHyEuR9RqlKhNeaUEYxY1yScBiHY9">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/blaster"
                            target="_blank"
                          >
                            <i>Blaster</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=13ZI99xlFnOtmevJT770vc0wzq2H9i66j">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rpnmap"
                            target="_blank"
                          >
                            <i>Red Primer - Nmap</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rpmetasploit"
                            target="_blank"
                          >
                            <i>Red Primer - Metasploit</i>
                          </a>{" "}
                          -{" "}
                          <a
                            href="https://drive.google.com/open?id=19DnNlNWzNVSwiBYz5mxPWRPCWQmINzmz"
                            target="_blank"
                          >
                            OVA
                          </a>{" "}
                          <a
                            href="https://drive.google.com/open?id=1FpCCpDdUA7KYdwNcfWzdaqbtz5w0F2Xd"
                            target="_blank"
                          >
                            Worksheet
                          </a>{" "}
                          <a
                            href="https://drive.google.com/open?id=1HxR0jRK1bI_q5MUefHaxKgSnWtoT0p9F"
                            target="_blank"
                          >
                            Answer Key
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rptmux"
                            target="_blank"
                          >
                            <i>Red Primer - tmux</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rpnessus"
                            target="_blank"
                          >
                            <i>Red Primer - Nessus</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rpwebscanning"
                            target="_blank"
                          >
                            <i>Red Primer - Web Scanning</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/rppsempire"
                            target="_blank"
                          >
                            <i>Red Primer - PS Empire</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/bpnetworking"
                            target="_blank"
                          >
                            <i>Blue Primer - Networking</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/bpsplunk"
                            target="_blank"
                          >
                            <i>Blue Primer - Splunk</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=1HeCwd-OrDTIT1IWqKjdbImKWBMqhc5qH">
                            OVA
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tryhackme.com/room/bpvolatility"
                            target="_blank"
                          >
                            <i>Blue Primer - Volatility</i>
                          </a>{" "}
                          -{" "}
                          <a href="https://drive.google.com/open?id=159aABrIgyLYAwcuefqpTBvXLrFWpNtJh">
                            OVA
                          </a>
                        </li>
                      </ul>
                      <br />
                      <li>
                        <b>Project Repositories</b>
                        <ul>
                          <li>
                            <a
                              href="https://github.com/DarkStar7471/THM-Bot"
                              target="_blank"
                            >
                              <i>TryHackMe Official Discord Bot</i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://github.com/DarkStar7471/darkstar7471.github.io"
                              target="_blank"
                            >
                              <i>darkstar7471.com</i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <br />
                    <li>
                      <b>Off-Site Blog Posts</b>
                    </li>
                    <ul>
                      <li>
                        <a
                          href="https://blog.tryhackme.com/making-the-mountain/"
                          target="_blank"
                        >
                          <i>Making the Mountain</i>
                        </a>{" "}
                        - TryHackMe Official Blog
                      </li>
                    </ul>
                    <br />
                    <li>
                      <b>Talk Videos</b>
                    </li>
                    <ul>
                      <li>
                        <a href="https://youtu.be/4DY4TXhmpGo" target="_blank">
                          <i>Making the Mountain; Creating Quality Boxes</i>
                        </a>{" "}
                        -{" "}
                        <a href="https://secic.org/" target="_blank">
                          SecIC
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtu.be/sYLHM-86gGw?t=14873"
                          target="_blank"
                        >
                          <i>
                            Making the Mountain; Creating Quality Boxes Updated
                            with KOTH
                          </i>
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://community.secarmy.org/sarcon/"
                          target="_blank"
                        >
                          SECARMY SARCON 2020
                        </a>
                      </li>
                    </ul>
                    <br />
                    <li>
                      <b>Presentation Slides</b>
                      <ul>
                        <li>
                          <a
                            href="https://docs.google.com/presentation/d/1e2_M-ErRHp8DoAHKDaTWKRT3uYwtsSMsMrHfmABm2rs/edit?usp=sharing"
                            target="_blank"
                          >
                            <i>Making the Mountain; Creating Quality Boxes</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://docs.google.com/presentation/d/1XOmScOR28ZEHCbQSximaZ1qlE8NxBCYdQPqSXvVqK7Y/edit?usp=sharing"
                            target="_blank"
                          >
                            <i>Finding Your Foes; Let's talk about SIEM baby</i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <br />
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
