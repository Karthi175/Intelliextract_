import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import styles from "./Viewuser.module.css";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function Viewchart() {
  const [modalFlg, setModalFlg] = useState(false);

  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toUTCString()
      .slice(4, 17);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      Name: "b pressure",
      value: "120/80",
      Accuracy: 95,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
    {
      id: 2,
      Name: "bp",
      value: "118/75",
      Accuracy: 85,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
    {
      id: 3,
      Name: "blood pressure",
      value: "119/76",
      Accuracy: 16,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
    {
      id: 4,
      Name: "blood pre.",
      value: "105/81",
      Accuracy: 42,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
    {
      id: 5,
      Name: "bloodpressure",
      value: "110/73",
      Accuracy: 86,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
    {
      id: 6,
      Name: "bp",
      value: "112/75",
      Accuracy: 92,
      Date: randomDate(new Date(2012, 0, 1), new Date()),
    },
  ]);

  const columns = [
    { field: "Name", headerName: "Name", flex: 1, editable: true },
    {
      field: "value",
      headerName: "Value",
      editable: true,
      width: 250,
    },
    {
      field: "Accuracy",
      headerName: "Accuracy",
      width: 250,
    },
    {
      field: "Date",
      headerName: "Date",
      type: Date,
      editable: true,
      width: 250,
    },
    {
      field: "delete",
      headerName: "Action",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
            <DeleteIcon
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "#c62828",
              }}
              onClick={(event) => {
                const tmpArr = rows.filter((data) => data.id !== cellValues.id);
                setRows(tmpArr);
                console.log(tmpArr, " tmpArr");
              }}
            />
            <VisibilityIcon
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "#1565c0",
              }}
              onClick={(event) => {
                setModalFlg(true);
              }}
            />
          </>
        );
      },
    },
  ];
  const closeModal = () => {
    setModalFlg(false);
  };

  return (
    <>
      <div className={styles.Tablealignment}>
        <div className={styles.tableShadow}>
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              height: "260px",
            }}
            getRowClassName={(params) =>
              `super-app-theme--${params.row.Accuracy}`
            }
            hideFooter={true}
          />
          {/* </Box>*/}
        </div>
      </div>
      {modalFlg && (
        <Modal onCancel={closeModal} title={`PDF Viewer`} width={"70vw"}>
          <iframe
            class="doc"
            width="890px"
            height="400"
            src="https://docs.google.com/gview?url=http://writing.engr.psu.edu/workbooks/formal_report_template.doc&embedded=true"
          ></iframe>
        </Modal>
      )}
      {modalFlg && <Backdrop />}
    </>
  );
}
