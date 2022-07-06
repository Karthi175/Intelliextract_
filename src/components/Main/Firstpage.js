import React from "react";
import Rowchart from "./Rowchart";
import Graphchart from "./Graphchart";
import Toprow from "./Toprow";
import styles from "./Firstpage.module.css";
import Tablechart from "./Tablechart";
import TableView from "./TableView";
import UploadFile from "./UploadFile";

const Firstpage = () => {
  return (
    <div>
      {/* <Toprow /> */}
      <UploadFile />
      <Rowchart />
      {/* <Tablechart /> */}
      {/*<TableView /> */}
    </div>
  );
};

export default Firstpage;
