import classes from "./Cards.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Modal from "../Profileuser/Modal";
import Backdrop from "../Profileuser/Backdrop";
import ColorCell from "./ColorCell";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import MedicationIcon from "../../assets/pill.png";
import { contextData } from "../../ContextWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./Docu.pdf";
import ColumnCellFont from "./ColumnCellFont1";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MedicationCard = () => {
  const [demo, setDemo] = useContext(contextData);

  const [disf, setDisf] = useContext(contextData);
  const [modalFlg, setModalFlg] = useState(false);
  const [pdfFlg, setPdfFlg] = useState(false);
  const [pg, setPg] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const [rows, setRows] = useState(location.state.response[2]["med_op"]);
  // demo[1]["medications"]
  console.log("pdf", location.state.pdf);
  console.log("pdf", location.state.response);
  // console.log("res", location.response);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(parseInt(pg, 10));
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const columns = [
    {
      field: "Drug",
      headerName: "Drug",
      editable: true,
      flex: 1,
      minWidth: 350,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },

    {
      field: "Strength",
      headerName: "Strength",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    // {
    //   field: "Duration",
    //   headerName: "Duration",
    //   editable: true,
    //   flex: 1,
    // },
    {
      field: "Frequency",
      headerName: "Frequency",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },

    {
      field: "Form",
      headerName: "Form",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },
    {
      field: "Route",
      headerName: "Route",
      editable: true,
      flex: 1,
      // align: "center",
      // headerAlign: "center",
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />;
      },
    },

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
    // {
    //   field: "F1score",
    //   headerName: "F1 Score",

    //   renderCell: (cellValues) => {
    //     return <ColorCell cellValues={cellValues} />;
    //   },
    //   flex: 1,
    //   // editable: true,
    // },
    {
      field: "Page_no",
      headerName: "Page No.",
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        // console.log(cellValues.value);
        return (
          <button
            className={`${classes.medi_pageno_buttons} btn btn-primary`}
            onClick={() => {
              setPdfFlg(true);
              console.log(cellValues.value);
              setPg(cellValues.value);
            }}
          >
            {" "}
            {cellValues.value}{" "}
          </button>
        );
      },
      flex: 1,
      // editable: true,
    },
  ];
  const closeModal = () => {
    setModalFlg(false);
    setPdfFlg(false);
  };
  return (
    <>
      <div className={`${classes.card} `}>
        <div className="row">
          <div className={`col-9 ${classes.title}`}>
            <img src={MedicationIcon} style={{ width: 45, height: 45 }} />
            <span style={{ paddingLeft: 10 }}>Medications</span>
          </div>
          <div className={`col-3 ${classes.medi_buttons}`}>
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
          title={`Medications`}
          width={"70vw"}
          imageSrc={MedicationIcon}
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
      {pdfFlg && (
        <Modal
          onCancel={closeModal}
          title={`Medication`}
          width={"65vw"}
          height={"43vw"}
        >
          <div style={{ display: "flex", height: "450px", width: "100%" }}>
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              {" "}
              <div className="row">
                <div className="col-8">
                  <Document
                    file={location.state.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                </div>
                <div className="col-4">
                  <div style={{ paddingTop: 500, paddingRight: 100 }}>
                    <div>
                      Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                      {numPages || "--"}
                    </div>

                    <div>
                      <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="btn btn-primary"
                      >
                        Previous
                      </button>
                      &nbsp;&nbsp;
                      <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        className="btn btn-primary"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {pdfFlg && <Backdrop />}
    </>
  );
};
export default MedicationCard;

// import classes from "./Cards.module.css";
// import { DataGrid } from "@mui/x-data-grid";
// import { useState, useContext } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import Modal from "../Profileuser/Modal";
// import Backdrop from "../Profileuser/Backdrop";
// import ColorCell from "./ColorCell";
// import SaveIcon from "@mui/icons-material/Save";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import { contextData } from "../../ContextWrapper";

// const MedicationCard = () => {
//   const [dum, setDum] = useContext(contextData);
//   const [modalFlg, setModalFlg] = useState(false);
//   const [rows, setRows] = useState(dum[1]["medications"]);
//   console.log("in in medical", dum[1]["medications"]);

//   const columns = [
//     {
//       field: "Drug",
//       headerName: "Drug",
//       editable: true,
//       flex: 1,
//       width: 350,
//     },

//     {
//       field: "Strength",
//       headerName: "Strength",
//       editable: true,
//       flex: 1,
//     },
//     // {
//     //   field: "Duration",
//     //   headerName: "Duration",
//     //   editable: true,
//     //   flex: 1,
//     // },
//     {
//       field: "Frequency",
//       headerName: "Frequency",
//       editable: true,
//       flex: 1,
//     },

//     {
//       field: "Form",
//       headerName: "Form",
//       editable: true,
//       flex: 1,
//     },
//     {
//       field: "Route",
//       headerName: "Route",
//       editable: true,
//       flex: 1,
//     },

//     {
//       field: "Page_no",
//       headerName: "Page_no",
//       editable: true,
//       flex: 1,
//     },
//     {
//       field: "Date",
//       headerName: "Date",
//       editable: true,
//       flex: 1,
//     },
//     {
//       field: "F1score",
//       headerName: "F1 Score",

//       renderCell: (cellValues) => {
//         return <ColorCell cellValues={cellValues} />;
//       },
//       flex: 1,
//       // editable: true,
//     },
//     // {
//     //   field: "delete",
//     //   headerName: "Action",
//     //   flex: 1,
//     //   renderCell: (cellValues) => {
//     //     return (
//     //       <>
//     //         <DeleteIcon
//     //           style={{
//     //             cursor: "pointer",
//     //             color: "#c62828",
//     //           }}
//     //           onClick={(event) => {
//     //             const tmpArr = rows.filter((data) => data.id !== cellValues.id);
//     //             setRows(tmpArr);
//     //             console.log(tmpArr, " tmpArr");
//     //           }}
//     //         />
//     //         <VisibilityIcon
//     //           style={{
//     //             cursor: "pointer",
//     //             color: "#1565c0",
//     //           }}
//     //           onClick={(event) => {
//     //             setModalFlg(true);
//     //           }}
//     //         />
//     //         <CheckBoxIcon
//     //           style={{
//     //             cursor: "pointer",
//     //             color: "green",
//     //           }}
//     //         />
//     //       </>
//     //     );
//     //   },
//     // },
//   ];
//   const closeModal = () => {
//     setModalFlg(false);
//   };
//   return (
//     <>
//       <div className={`${classes.card} `}>
//         <div className="row">
//           <div className={`col-10 ${classes.title}`}>Medication</div>
//           <div className="col-2">
//             <RefreshIcon sx={{ cursor: "pointer" }} />
//             <SaveIcon
//               sx={{ marginLeft: "10px", color: "#685F81", cursor: "pointer" }}
//             />
//             <ZoomOutMapIcon
//               sx={{ marginLeft: "10px", cursor: "pointer" }}
//               onClick={(event) => {
//                 setModalFlg(true);
//               }}
//             />
//           </div>
//         </div>

//         <div>
//           <DataGrid
//             sx={{ height: "260px" }}
//             rows={rows}
//             columns={columns}
//             hideFooter={true}
//           />
//         </div>
//       </div>
//       {modalFlg && (
//         <Modal onCancel={closeModal} title={`Medication`} width={"70vw"}>
//           <div style={{ display: "flex", height: "450px", width: "100%" }}>
//             <div style={{ flexGrow: 1, textAlign: "center" }}>
//               {" "}
//               <DataGrid rows={rows} columns={columns} hideFooter={true} />
//             </div>
//           </div>
//         </Modal>
//       )}
//       {modalFlg && <Backdrop />}
//     </>
//   );
// };
// export default MedicationCard;
