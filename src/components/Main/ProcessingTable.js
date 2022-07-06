import classes from "./Tablechart.module.css";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProcessingTable = () => {
  const columns = [
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    {
      field: "mobile",
      headerName: "Phone Number",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Processing status",
      width: 100,
      renderCell: () => {
        return (
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={40} text={`40%`} />
          </div>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Tyrion Lannister",
      email: "tyrianlannister@gmail.com",
      mobile: "9987546652",
    },
    {
      id: 2,
      name: "Bran stark",
      email: "branstark@gmail.com",
      mobile: "8754123695",
    },
    {
      id: 3,
      name: "Joffrey Baratheon",
      email: "joffreybaratheon@gmail.com",
      mobile: "9235464587",
    },
    {
      id: 4,
      name: "Robb Stark",
      email: "robbstark@gmail.com",
      mobile: "8875496321",
    },
    {
      id: 5,
      name: "Jaime Lannister",
      email: "jaimelannister@yahoo.com",
      mobile: "8564971253",
    },
  ];

  return (
    <div className={classes.outer}>
      <div
        style={{ textAlign: "left", paddingLeft: "20px", paddingTop: "5px" }}
      >
        <h4>Under Processing</h4>
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
export default ProcessingTable;
