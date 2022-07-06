import classes from "./Cards.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ColorCell from "./ColorCell";
import Modal from "../Profileuser/Modal";
import { useLocation } from "react-router-dom";
import Backdrop from "../Profileuser/Backdrop";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import OrderHistory from "../../assets/order-history.png";
import { contextData } from "../../ContextWrapper";
import ColumnCellFont from "./ColumnCellFont1";

const SocialCard = () => {
  const [demo, setDemo] = useContext(contextData);
  const [modalFlg, setModalFlg] = useState(false);
  const location = useLocation();
  const closeModal = () => {
    setModalFlg(false);
  };
  const [rows, setRows] = useState(location.state.response[1]["soc_op"]);
  const columns = [
    {
      field: "Date",
      headerName: "Date",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    {
      field: "Items",
      headerName: "Attribute",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    {
      field: "Value",
      headerName: "Value",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    // {
    //   field: "f1score",
    //   headerName: "F1 Score",
    //   renderCell: (cellValues) => {
    //     return <ColorCell cellValues={cellValues} />;
    //   },
    //   editable: true,
    //   flex: 1,
    // },
  ];
  // demo[4]["Socail_history"]

  return (
    <>
      <div
        className={`${classes.card}`}
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <div className="row">
          <div className={`col-8 ${classes.title}`}>
            <img src={OrderHistory} style={{ width: 45, height: 45 }} />
            <span style={{ paddingLeft: 10 }}>Social History</span>
          </div>
          <div className="col-4" style={{ marginTop: 10, textAlign: "right" }}>
            <RefreshIcon sx={{ cursor: "pointer" }} />
            <SaveIcon
              sx={{ marginLeft: "10px", color: "#685F81", cursor: "pointer" }}
            />
            <ZoomOutMapIcon
              sx={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={(event) => {
                setModalFlg(true);
              }}
            />
          </div>
        </div>
        <div>
          <DataGrid
            sx={{
              height: "260px",
              backgroundColor: "#ffffff",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              border: "none",
              "& .MuiDataGrid-main": {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#07004d",
                color: "#ffffff",
                textAlign: "center",
                alignItems: "center",
                fontSize: 13,
                lineHeight: "19px",
                fontFamily: "Montserrat",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "700 !important",
              },
              "& .MuiDataGrid-columnSeparator--sideRight": {
                color: "#07004d !important",
              },
              "& .MuiDataGrid-virtualScrollerRenderZone": {
                "& .MuiDataGrid-row": {
                  backgroundColor: "#ffffff",
                  color: "#333333",
                  fontWeight: "600",
                },
                "& .MuiDataGrid-row:hover": {
                  color: "#4005a0 !important",
                  backgroundColor: "#eee3ff",
                  fontWeight: "700 !important",
                },
              },
              "& ::-webkit-scrollbar": {
                width: 8,
              },
              "& ::-webkit-scrollbar-track": {
                borderRadius: "10px  !important",
              },
              "& ::-webkit-scrollbar-thumb": {
                backgroundColor: "#c1c1c1",
                borderRadius: 120,
                backgroundClip: "content-box",
              },
            }}
            rows={rows}
            columns={columns}
            hideFooter={true}
            headerHeight={40}
            rowHeight={60}
          />
        </div>
      </div>
      {modalFlg && (
        <Modal
          onCancel={closeModal}
          title={`Social History`}
          width={"70vw"}
          imageSrc={OrderHistory}
        >
          <div className={`${classes.modal_grid_div}`}>
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              {" "}
              <DataGrid
                rows={rows}
                columns={columns}
                hideFooter={true}
                headerHeight={40}
                rowHeight={60}
                sx={{
                  backgroundColor: "#ffffff",
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  border: "none",
                  "& .MuiDataGrid-main": {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#07004d",
                    color: "#ffffff",
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: 13,
                    lineHeight: "19px",
                    fontFamily: "Montserrat",
                  },
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: "700 !important",
                  },
                  "& .MuiDataGrid-columnSeparator--sideRight": {
                    color: "#07004d !important",
                  },
                  "& .MuiDataGrid-virtualScrollerRenderZone": {
                    "& .MuiDataGrid-row": {
                      backgroundColor: "#ffffff",
                      color: "#333333",
                      fontWeight: "600",
                    },
                    "& .MuiDataGrid-row:hover": {
                      color: "#4005a0 !important",
                      backgroundColor: "#eee3ff",
                      fontWeight: "700 !important",
                    },
                  },
                  "& ::-webkit-scrollbar": {
                    width: 8,
                  },
                  "& ::-webkit-scrollbar-track": {
                    borderRadius: "10px  !important",
                  },
                  "& ::-webkit-scrollbar-thumb": {
                    backgroundColor: "#c1c1c1",
                    borderRadius: 120,
                    backgroundClip: "content-box",
                  },
                }}
              />
            </div>
          </div>
        </Modal>
      )}
      {modalFlg && <Backdrop />}
    </>
  );
};
export default SocialCard;
