import React from "react";
import { faBell, faFlag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logoGoogle.png";
import pic from "../../assets/update.png";
import { ReactComponent as LogoPic } from '../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm navbar-light"
        style={{
          background: "white"
        }}
      >
        <div class="container-fluid ">
          {/* <a
            class="navbar-brand "
            href="#"
            style={{ color: "white", fontWeight: "700" }}
          >
            IntellyExtract.AI
          </a> */}
          {/* <img src={pic} style={{ width: "500px", height: "50px" }}></img> */}
          <LogoPic style={{ width: "233px", height: "74px", marginLeft: "0px", marginTop: "-3px" }} />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={(window.location.pathname || location.pathname) === '/dashboard' ? "d-none" : "d-block"} style={{ float: "right", paddingRight: "55px" }}>
            <button type="button" className={`${styles.about_button} btn`}>About</button>
            <button type="button" className={`${styles.help_button} btn`}>Help</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
