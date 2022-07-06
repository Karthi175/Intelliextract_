import React, { useEffect, useState } from "react";
//import BootstrapTable from "react-bootstrap-table-next";
//import paginationFactory from "react-bootstrap-table2-paginator";
import { FormControlLabel, IconButton } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./Tablechart.module.css";
import { useNavigate, Route } from "react-router-dom";
import Viewuser from "../User/Viewuser";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ColumnCellFont from '../Dashboard/ColumnCellFont';

const Tablechart = () => {
  let navigate = useNavigate();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: 'center',
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: 'center',
      renderCell: (cellValues) => {
        return <ColumnCellFont cellValues={cellValues} />
      },
    },
    // {
    //   field: "date",
    //   headerName: "Date",
    //   flex: 1,
    // },
    // {
    //   field: "number",
    //   headerName: "Number",
    //   flex: 1,
    // },
    // {
    //   field: "doctor",
    //   headerName: "Doctor",
    //   flex: 1,
    // },
    // {
    //   field: "condition",
    //   headerName: "Condition",
    //   flex: 1,
    // },
    {
      filed: "status",
      headerName: "Status",
      flex: 1,
      align: "center",
      headerAlign: 'center',
      renderCell: () => {
        return (
          <div style={{ color: "#1f9254", fontSize: 13, fontWeight: 600 }}>
            Processed
          </div>
        );
      },
    },
    {
      field: "view",
      headerName: "View",
      align: "center",
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div>
            <RemoveRedEyeIcon
              style={{ fontSize: 30 }}
              onClick={(event) => {
                navigate("/dashboard");
              }}
            />
          </div>
        );
      },
      // renderCell: (cellValues) => {
      //   return (
      //     <button
      //       type="button"
      //       class="btn btn-light"
      //       onClick={(event) => {
      //         console.log("Clicked.....");
      //         navigate("/Viewuser");
      //       }}
      //     >
      //       View
      //     </button>
      //   );
      // },
    },
  ];

  /* const doctorArr = [
    "Dr.Sophie",
    "Dr.Liam",
    "Dr.Noah",
    "Dr.Emma",
    "Dr.James",
    "Dr.David",
    "Dr.Sridhar",
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
  const productsGenerator = (quantity) => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
      items.push({
        id: i + 1,
        name: `Name ${i}`,
        date: randomDate(new Date(2012, 0, 1), new Date()),
        number: 987654321 + i,
        doctor: doctorArr[generateRandom(doctorArr)],
        condition: injuryArr[generateRandom(injuryArr)],
        view: "View",
      });
    }
    console.log(items);
    return items;
  };*/
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Name 0",
      date: " 21 May 2015 ",
      number: 987654321,
      doctor: "Dr.David",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 2,
      name: "Name 1",
      date: " 25 Dec 2017 ",
      number: 987654322,
      doctor: "Dr.David",
      condition: "Cancer",
      view: "View",
    },
    {
      id: 3,
      name: "Name 2",
      date: " 09 Jan 2022 ",
      number: 987654323,
      doctor: "Dr.Emma",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 4,
      name: "Name 3",
      date: " 11 May 2013 ",
      number: 987654324,
      doctor: "Dr.David",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 5,
      name: "Name 4",
      date: " 30 Nov 2013 ",
      number: 987654325,
      doctor: "Dr.James",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 6,
      name: "Name 5",
      date: " 21 Dec 2013 ",
      number: 987654326,
      doctor: "Dr.Sridhar",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 7,
      name: "Name 6",
      date: " 10 Jun 2021 ",
      number: 987654327,
      doctor: "Dr.Sridhar",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 8,
      name: "Name 7",
      date: " 05 Feb 2018 ",
      number: 987654328,
      doctor: "Dr.Emma",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 9,
      name: "Name 8",
      date: " 01 Sep 2020 ",
      number: 987654329,
      doctor: "Dr.James",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 10,
      name: "Name 9",
      date: " 05 Sep 2016 ",
      number: 987654330,
      doctor: "Dr.Sridhar",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 11,
      name: "Name 10",
      date: " 23 Aug 2017 ",
      number: 987654331,
      doctor: "Dr.James",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 12,
      name: "Name 11",
      date: " 21 Aug 2013 ",
      number: 987654332,
      doctor: "Dr.Emma",
      condition: "Heart",
      view: "View",
    },
    {
      id: 13,
      name: "Name 12",
      date: " 22 Aug 2018 ",
      number: 987654333,
      doctor: "Dr.Sophie",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 14,
      name: "Name 13",
      date: " 25 Mar 2021 ",
      number: 987654334,
      doctor: "Dr.James",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 15,
      name: "Name 14",
      date: " 20 Jan 2021 ",
      number: 987654335,
      doctor: "Dr.Noah",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 16,
      name: "Name 15",
      date: " 05 Mar 2017 ",
      number: 987654336,
      doctor: "Dr.David",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 17,
      name: "Name 16",
      date: " 17 Jun 2020 ",
      number: 987654337,
      doctor: "Dr.Noah",
      condition: "Heart",
      view: "View",
    },
    {
      id: 18,
      name: "Name 17",
      date: " 16 Mar 2012 ",
      number: 987654338,
      doctor: "Dr.Sophie",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 19,
      name: "Name 18",
      date: " 02 Nov 2017 ",
      number: 987654339,
      doctor: "Dr.Sophie",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 20,
      name: "Name 19",
      date: " 29 Jul 2020 ",
      number: 987654340,
      doctor: "Dr.Liam",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 21,
      name: "Name 20",
      date: " 07 Dec 2014 ",
      number: 987654341,
      doctor: "Dr.David",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 22,
      name: "Name 21",
      date: " 21 May 2015 ",
      number: 987654342,
      doctor: "Dr.James",
      condition: "Cancer",
      view: "View",
    },
    {
      id: 23,
      name: "Name 22",
      date: " 19 Dec 2019 ",
      number: 987654343,
      doctor: "Dr.Noah",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 24,
      name: "Name 23",
      date: " 02 Oct 2016 ",
      number: 987654344,
      doctor: "Dr.David",
      condition: "Heart",
      view: "View",
    },
    {
      id: 25,
      name: "Name 24",
      date: " 24 Jan 2019 ",
      number: 987654345,
      doctor: "Dr.Sophie",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 26,
      name: "Name 25",
      date: " 16 Dec 2017 ",
      number: 987654346,
      doctor: "Dr.Liam",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 27,
      name: "Name 26",
      date: " 08 Oct 2017 ",
      number: 987654347,
      doctor: "Dr.Sridhar",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 28,
      name: "Name 27",
      date: " 01 Feb 2015 ",
      number: 987654348,
      doctor: "Dr.David",
      condition: "Heart",
      view: "View",
    },
    {
      id: 29,
      name: "Name 28",
      date: " 04 Apr 2015 ",
      number: 987654349,
      doctor: "Dr.Sophie",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 30,
      name: "Name 29",
      date: " 20 Jul 2017 ",
      number: 987654350,
      doctor: "Dr.Noah",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 31,
      name: "Name 30",
      date: " 14 Mar 2020 ",
      number: 987654351,
      doctor: "Dr.Sridhar",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 32,
      name: "Name 31",
      date: " 25 Jul 2020 ",
      number: 987654352,
      doctor: "Dr.Noah",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 33,
      name: "Name 32",
      date: " 09 Oct 2015 ",
      number: 987654353,
      doctor: "Dr.Noah",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 34,
      name: "Name 33",
      date: " 30 May 2019 ",
      number: 987654354,
      doctor: "Dr.James",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 35,
      name: "Name 34",
      date: " 05 Dec 2021 ",
      number: 987654355,
      doctor: "Dr.Sridhar",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 36,
      name: "Name 35",
      date: " 17 Mar 2016 ",
      number: 987654356,
      doctor: "Dr.Liam",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 37,
      name: "Name 36",
      date: " 12 Aug 2016 ",
      number: 987654357,
      doctor: "Dr.James",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 38,
      name: "Name 37",
      date: " 11 May 2017 ",
      number: 987654358,
      doctor: "Dr.Liam",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 39,
      name: "Name 38",
      date: " 26 Sep 2021 ",
      number: 987654359,
      doctor: "Dr.James",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 40,
      name: "Name 39",
      date: " 31 Aug 2012 ",
      number: 987654360,
      doctor: "Dr.Sridhar",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 41,
      name: "Name 40",
      date: " 09 Apr 2020 ",
      number: 987654361,
      doctor: "Dr.Liam",
      condition: "Stroke",
      view: "View",
    },
    {
      id: 42,
      name: "Name 41",
      date: " 13 Nov 2015 ",
      number: 987654362,
      doctor: "Dr.Liam",
      condition: "Cancer",
      view: "View",
    },
    {
      id: 43,
      name: "Name 42",
      date: " 15 Jan 2022 ",
      number: 987654363,
      doctor: "Dr.Emma",
      condition: "liver disease ",
      view: "View",
    },
    {
      id: 44,
      name: "Name 43",
      date: " 22 Jun 2021 ",
      number: 987654364,
      doctor: "Dr.Sophie",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 45,
      name: "Name 44",
      date: " 14 May 2014 ",
      number: 987654365,
      doctor: "Dr.Liam",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 46,
      name: "Name 45",
      date: " 03 Jan 2020 ",
      number: 987654366,
      doctor: "Dr.James",
      condition: "Blood pressure",
      view: "View",
    },
    {
      id: 47,
      name: "Name 46",
      date: " 03 Sep 2019 ",
      number: 987654367,
      doctor: "Dr.James",
      condition: "Headaches",
      view: "View",
    },
    {
      id: 48,
      name: "Name 47",
      date: " 18 Aug 2012 ",
      number: 987654368,
      doctor: "Dr.David",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 49,
      name: "Name 48",
      date: " 10 Jun 2014 ",
      number: 987654369,
      doctor: "Dr.Emma",
      condition: "Alcoholism",
      view: "View",
    },
    {
      id: 50,
      name: "Name 49",
      date: " 25 Feb 2018 ",
      number: 987654370,
      doctor: "Dr.Noah",
      condition: "Stroke",
      view: "View",
    },
  ]);
  /*useEffect(() => {
    setproducts(productsGenerator(50));
  }, []);*/
  return (
    <>
      <div className={styles.tableContainer}>
        {/* <h4 style={{ paddingTop: "20px", paddingLeft: "10px" }}>
          Patient Details
        </h4> */}
        <div className={styles.tableBox}>
          <DataGrid
            rows={products}
            headerHeight={40}
            rowHeight={60}
            columns={columns}
            hideFooter={true}
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
                backgroundColor: "#f8f3ff",
                color: "#0f1419",
                textAlign: "center",
                alignItems: "center",
                fontSize: 13,
                lineHeight: 19,
                fontFamily: "Montserrat",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "700 !important",
              },
              "& .MuiDataGrid-columnSeparator--sideRight": {
                color: "#f8f3ff !important",

              },
              "& .MuiDataGrid-virtualScrollerRenderZone": {
                "& .MuiDataGrid-row": {
                  backgroundColor: "#ffffff",
                  color: "#333333",
                  fontWeight: "600"
                },
                "& .MuiDataGrid-row:hover": {
                  color: "#4005a0 !important",
                  backgroundColor: "#eee3ff",
                  fontWeight: "700 !important"
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
                backgroundClip: "content-box"
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Tablechart;
