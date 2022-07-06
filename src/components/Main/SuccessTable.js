import classes from "./Tablechart.module.css";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate, Route } from "react-router-dom";

const SuccessTable = () => {
  let navigate = useNavigate();
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "mobile",
      headerName: "Phone Number",
      width: 120,
    },
    {
      field: "status",
      headerName: "Processing status",
      width: 130,
      renderCell: () => {
        return (
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={100} text={`100%`} />
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 80,
      renderCell: (params) => {
        return (
          <div>
            <RemoveRedEyeIcon
              style={{ fontSize: 30 }}
              onClick={(event) => {
                console.log("Clicked.....");
                navigate("/Viewuser");
              }}
            />
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      mobile: "9987546652",
    },
    {
      id: 2,
      name: "John snow",
      email: "johnsnow@gmail.com",
      mobile: "8754123695",
    },
    {
      id: 3,
      name: "Dotharaki",
      email: "dotharaki@gmail.com",
      mobile: "9235464587",
    },
    {
      id: 4,
      name: "Arya Stark",
      email: "aryastartk@gmail.com",
      mobile: "8875496321",
    },
    {
      id: 5,
      name: "Cersi Lannister",
      email: "cersilannister@yahoo.com",
      mobile: "8564971253",
    },
  ];

  return (
    <div className={classes.outer}>
      <div
        style={{ textAlign: "left", paddingLeft: "20px", paddingTop: "5px" }}
      >
        <h4>Processing Completed</h4>
      </div>
      <DataGrid
        rows={rows}
        rowHeight={100}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
          boxShadow: 2,
          margin: "2vh",
          border: 2,
          borderColor: "lightgrey",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#96b3fb",
          },
          "& .MuiDataGrid-columnSeparator--sideRight": {
            color: "black !important",
          },
        }}
      />
    </div>
  );
};
export default SuccessTable;
