import React from "react";
import pexels from "../../assets/pexels.jpg";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./Viewuser.module.css";
import { useNavigate, Route } from "react-router-dom";
import Viewchart from "./Viewchart";
import Rowchartone from "../Main/charts/Rowchartone";
import { Thermostat } from "@mui/icons-material";
import ScaleIcon from "@mui/icons-material/Scale";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

import VaccinesIcon from "@mui/icons-material/Vaccines";

import HeightIcon from "@mui/icons-material/Height";

import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import avatarImage from "../../assets/avatar.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import MedicationIcon from "@mui/icons-material/Medication";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Viewuser = () => {
  let navigate = useNavigate();
  const clickFun = () => {
    console.log("Clicked.....");
    navigate("/Viewchart");
  };
  return (
    <div>
      <div class={`row ${styles.clearFix}`}>
        <div class="col-lg-2 col-md-12 col-sm-12">
          <div className={`${styles.navbar}`}>
            {/*<div className={`${styles.avatar_container}`}>
              <div className={`${styles.avatar_content}`}>
                <img
                  src={avatarImage}
                  alt="Avatar"
                  className={`${styles.avatar}`}
                />
              </div>
            </div>
  <hr className={`${styles.hr_line}`} />*/}
            <div className={`${styles.menu_bars}`}>
              <div className={`${styles.menu_item}`}>
                <span className={`${styles.menu_icon}`}>
                  <PersonIcon></PersonIcon>
                </span>
                <span className={`${styles.menu_name}`}>Vitals</span>
              </div>

              <div className={`${styles.menu_item}`}>
                <span className={`${styles.menu_icon}`}>
                  <MedicationIcon></MedicationIcon>
                </span>
                <span className={`${styles.menu_name}`}>Medications</span>
              </div>

              <div className={`${styles.menu_item}`}>
                <span className={`${styles.menu_icon}`}>
                  <AssessmentIcon></AssessmentIcon>
                </span>
                <span className={`${styles.menu_name}`}>Lab Report</span>
              </div>

              <div className={`${styles.menu_item}`}>
                <span className={`${styles.menu_icon}`}>
                  <PersonIcon></PersonIcon>
                </span>
                <span className={`${styles.menu_name}`}>
                  Patient Demography
                </span>
              </div>

              <div className={`${styles.menu_item}`}>
                <span className={`${styles.menu_icon}`}>
                  <SwitchAccountIcon></SwitchAccountIcon>
                </span>
                <span className={`${styles.menu_name}`}>Social History</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-md-12 col-sm-12 pt-3 ">
          <div className={`${styles.detail_container} col-12`}>
            <div className={`${styles.content_container} col-12`}>
              <div className={styles.detail_content}>
                <div className={`${styles.detail_image} `}>
                  <PersonIcon></PersonIcon>
                </div>
                <div className={`${styles.detail_desc} `}>Chandler Bing</div>
              </div>
              <div className={styles.detail_content}>
                <div className={`${styles.detail_image}`}>
                  <CallIcon></CallIcon>
                </div>
                <div className={`${styles.detail_desc}`}>1234567890</div>
              </div>
              <div className={styles.detail_content}>
                <div className={`${styles.detail_image}`}>
                  <EmailIcon></EmailIcon>
                </div>
                <div className={`${styles.detail_desc}`}>
                  chandlerbing@gmail.com
                </div>
              </div>
            </div>
          </div>
          {/* ************************** */}
          <div className={`${styles.card_container} row`}>
            <div className={`${styles.card_styles} col-md-2`}>
              <div className={`${styles.card_content}`}>
                <Thermostat className={`${styles.card_icon}`}></Thermostat>
                <span className={`${styles.card_name}`}>Temperature</span>
              </div>
            </div>

            <div className={`${styles.card_styles} col-md-2`}>
              <div className={`${styles.card_content}`}>
                <VaccinesIcon className={`${styles.card_icon}`}></VaccinesIcon>
                <span className={`${styles.card_name}`}>Vaccince</span>
              </div>
            </div>

            <div className={`${styles.card_styles} col-md-2`}>
              <div className={`${styles.card_content}`}>
                <FavoriteIcon className={`${styles.card_icon}`}></FavoriteIcon>
                <span className={`${styles.card_name}`}>Heart Rate</span>
              </div>
            </div>

            <div className={`${styles.card_styles} col-md-2`}>
              <div className={`${styles.card_content}`}>
                <HeightIcon className={`${styles.card_icon}`}></HeightIcon>
                <span className={`${styles.card_name}`}>Height</span>
              </div>
            </div>

            <div className={`${styles.card_styles} col-md-2`}>
              <div className={`${styles.card_content}`}>
                <BloodtypeIcon
                  className={`${styles.card_icon}`}
                ></BloodtypeIcon>
                <span className={`${styles.card_name}`}>Blood Pressure</span>
              </div>
            </div>
          </div>
          <div class="row">
            <Viewchart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewuser;
