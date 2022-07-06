import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Rowchart.module.css";
import Rowchartone from "./charts/Rowchartone";
import Rowchartsix from "./charts/Rowchartsix";
import Rowchartfive from "./charts/Rowchartfive";
import Rowchartfour from "./charts/Rowchartfour";
import Rowchartthree from "./charts/Rowchartthree";
import Rowcharttwo from "./charts/Rowcharttwo";
import Tablechart from "./Tablechart";
const Rowchart = () => {
  return (
    <>
      <div class="col-12 mt-3 px-4">
        <div class="row">
          <div class="col-4">
            {" "}
            <div className={styles.cardConatiner}>
              <div className={styles.cardHeader}>Documents Processed <span>53</span></div>
              {/* <Rowchartone /> */}

              <Rowchartsix />
            </div>
          </div>
          <div class="col-8">
            {" "}
            <div className={styles.cardConatiner}>
              <div className={styles.cardHeader}>Patient Details <span>50</span></div>
              <Tablechart />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="col-3 mt-5 px-3">
          <Sidebar />
        </div> */}

      {/* <div className={styles.layout}>
        <div className={styles.widgetConainer}>
          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Vitals</div>
            <Rowchartone />
          </div>

          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Medications</div>
            <Rowchartsix />
          </div>

          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Lab Report</div>
            <Rowchartone />
          </div>
          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Patient Demographic Details</div>
            <Rowchartsix />
          </div>
          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Social History</div>
            <Rowchartone />
          </div>
          <div className={styles.cardConatiner}>
            <div className={styles.cardHeader}>Earnings</div>
            <Rowchartsix />
          </div>
        </div>
  <Sidebar />
      </div>*/}
    </>
  );
};

export default Rowchart;
