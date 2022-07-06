import classes from "./Cards.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Modal from "../Profileuser/Modal";
import Backdrop from "../Profileuser/Backdrop";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ColorCell from "./ColorCell";
import SaveIcon from "@mui/icons-material/Save";
import VitalsImage from "../../assets/ecg.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useLocation } from "react-router-dom";
import ColumnCellFont from "./ColumnCellFont1";

const Cards = () => {
  const [modalFlg, setModalFlg] = useState(false);
  const location = useLocation();
  const [rows, setRows] = useState(location.state.response[3]["vital_res"]);

  const columns = [
    {
      field: "content",
      headerName: "Items",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    {
      field: "value",
      headerName: "Value",
      editable: true,
      //   width: 70,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
  ];
  const closeModal = () => {
    setModalFlg(false);
  };
  return (
    <>
      <div
        className={`${classes.card}`}
        style={{ marginTop: 0, marginBottom: 10 }}
      >
        <div className="row">
          <div className={`col-8 ${classes.title}`}>
            <img src={VitalsImage} style={{ width: 45, height: 45 }} />
            <span style={{ paddingLeft: 10 }}>Vitals</span>
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
          title={`Vitals`}
          width={"70vw"}
          imageSrc={VitalsImage}
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
export default Cards;
