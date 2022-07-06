import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Completedchart from "./Completedchart";

import styles from "./Viewuser.module.css";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MaterialData from "./MaterialData";

export default function Viewchart() {
  const [modalFlg, setModalFlg] = useState(false);

  const doctorArr = [
    "Sophie",
    "Liam",
    "Noah",
    "Emma",
    "James",
    "David",
    "Sridhar",
  ];
  const injuryArr = [
    "Heart",
    "Blood pressure",
    "Stroke",
    "Cancer",
    "Alcoholism",
    "liver disease ",
    "Headaches",
  ];

  const generateRandom = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

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
  const getBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  const getHoverBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

  return (
    <>
      <div className={styles.Tablealignment}>
        {/*
        <MaterialData />*/}

        <div
          style={{ height: 370, width: "100%", marginTop: "20px" }}
          className={styles.tableShadow}
        >
          {/* <Box
            sx={{
              height: 370,
              width: 1,
              "& .super-app-theme--85": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.info.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.info.main,
                      theme.palette.mode
                    ),
                },
              },
              "& .super-app-theme--95": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.success.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.success.main,
                      theme.palette.mode
                    ),
                },
              },
              "& .super-app-theme--16": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.error.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.error.main,
                      theme.palette.mode
                    ),
                },
              },
              "& .super-app-theme--86": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.info.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.info.main,
                      theme.palette.mode
                    ),
                },
              },
              "& .super-app-theme--42": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.warning.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.warning.main,
                      theme.palette.mode
                    ),
                },
              },
              "& .super-app-theme--92": {
                bgcolor: (theme) =>
                  getBackgroundColor(
                    theme.palette.success.main,
                    theme.palette.mode
                  ),
                "&:hover": {
                  bgcolor: (theme) =>
                    getHoverBackgroundColor(
                      theme.palette.success.main,
                      theme.palette.mode
                    ),
                },
              },
            }}
          >*/}
          <DataGrid
            rows={rows}
            columns={columns}
            getRowClassName={(params) =>
              `super-app-theme--${params.row.Accuracy}`
            }
          />
          {/* </Box>*/}
        </div>
      </div>
      {modalFlg && (
        <Modal onCancel={closeModal} title={`PDF Viewer`} width={"70vw"}>
          <div>
            {/*<iframe
              src="./flexboxsheet.pdf"
              type="application/pdf"
              width="900px"
              height="430px"
              title=""
      ></iframe>*/}
          </div>
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
