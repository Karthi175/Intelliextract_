import classes from "./Cards.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { numberFormat } from "highcharts";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ColorCell from "./ColorCell";
import { useState, useContext } from "react";
import Modal from "../Profileuser/Modal";
import Backdrop from "../Profileuser/Backdrop";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import IndividualServer from "../../assets/individual-server.png";
import { contextData } from "../../ContextWrapper";
import { Forward10 } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import ColumnCellFont from "./ColumnCellFont1";

const PersonCard = () => {
  const [demo, setDemo] = useContext(contextData);
  const [modalFlg, setModalFlg] = useState(false);
  const location = useLocation();
  const [rows, setRows] = useState(location.state.response[0]["demo_res"]);
  // var temp_list = [
  //   "Name",
  //   "DOB",
  //   "Mobile",
  //   "Email",
  //   "Gender",
  //   "Marital_status",
  //   "Race_Ethnicity",
  //   "PCPID",
  //   "Blood_group",
  //   "Address",
  //   "page_no",
  // ];
  // var temp_list1 = [];
  // // var count = Object.keys(dum[0]["demographic_details"][0]).length;
  // // console.log(count);
  // for (let i = 0; i < temp_list.length; i++) {
  //   let val = {
  //     id: "",
  //     content: "",
  //     value: "",
  //     f1score: "",
  //   };
  //   val["id"] = i + 1;
  //   val["content"] = temp_list[i];
  //   val["value"] = demo[0]["demographic_details"][temp_list[i]];
  //   val["f1score"] = 100;
  //   temp_list1.push(val);
  // }
  // console.log(temp_list1);

  const columns = [
    {
      field: "content",
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
      field: "value",
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
    //   flex: 1,
    //   renderCell: (cellValues) => {
    //     return <ColorCell cellValues={cellValues} />;
    //   },
    //   editable: true,
    // },
  ];
  // console.log("in personalcard", dum);
  // demo[0]["demographic_details"]

  const closeModal = () => {
    setModalFlg(false);
  };
  return (
    <>
      <div className={classes.card}>
        <div className="row">
          <div className={`col-lg-8 ${classes.title}`}>
            <img src={IndividualServer} style={{ width: 45, height: 45 }} />
            <span style={{ paddingLeft: 10 }}>Demographic</span>
          </div>
          <div
            className="col-lg-4"
            style={{ marginTop: 10, textAlign: "right" }}
          >
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
          title={`Demographic Details`}
          imageSrc={IndividualServer}
          width={"70vw"}
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
export default PersonCard;
