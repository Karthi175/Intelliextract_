import React from "react";
import styles from "./Toprow.module.css";

import {
  faKitMedical,
  faBed,
  faBookMedical,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Toprow = () => {
  return (
    <div className={styles.topContainer}>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card" className={styles.boxContainer}>
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <span className={styles.boxicon}>
                      <FontAwesomeIcon icon={faBookMedical} />
                    </span>
                  </div>
                  <div class="col-7">
                    <h6 class="mt-0 mb-1">Lorem Ipsum</h6>
                    <div className={styles.count}>213</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card" className={styles.boxContainer}>
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <span className={styles.boxicon}>
                      <FontAwesomeIcon icon={faKitMedical} />
                    </span>
                  </div>
                  <div class="col-7">
                    <h6 class="mt-0 mb-1">Lorem Ipsum</h6>
                    <div className={styles.count}>213</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card" className={styles.boxContainer}>
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <span className={styles.boxicon}>
                      <FontAwesomeIcon icon={faBed} />
                    </span>
                  </div>
                  <div class="col-7">
                    <h6 class="mt-0 mb-1">Lorem Ipsum</h6>
                    <div className={styles.count}>213</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card" className={styles.boxContainer}>
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <span className={styles.boxicon}>
                      <FontAwesomeIcon icon={faTruckMedical} />
                    </span>
                  </div>
                  <div class="col-7">
                    <h6 class="mt-0 mb-1">Lorem Ipsum</h6>
                    <div className={styles.count}>213</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toprow;
