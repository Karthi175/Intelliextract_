import React from "react";
import Rowchart from "./Rowchart";
import Graphchart from "./Graphchart";
import Toprow from "./Toprow";
import styles from "./Firstpage.module.css";
import Tablechart from "./Tablechart";

const Firstpage = () => {
  return (
    <div className={styles.compoPosition}>
      <Toprow />
      <Rowchart />
      <Graphchart />
      <Tablechart />
    </div>
  );
};

export default Firstpage;
