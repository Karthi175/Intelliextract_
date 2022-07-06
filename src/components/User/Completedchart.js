import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import styles from "./Viewuser.module.css";

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.name?.trim() === "") {
            reject();
          } else {
            resolve(user);
          }
        }, 200)
      ),
    []
  );
};

function computeMutation(newRow, oldRow) {
  if (newRow.name !== oldRow.name) {
    return `Name from '${oldRow.name}' to '${newRow.name}'`;
  }
  if (newRow.age !== oldRow.age) {
    return `Age from '${oldRow.age || ""}' to '${newRow.age || ""}'`;
  }
  return null;
}

export default function Completedchart() {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef(null);
  const [promiseArguments, setPromiseArguments] = React.useState(null);

  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          // Save the arguments to resolve or reject the promise later
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow); // Nothing was changed
        }
      }),
    []
  );

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      setSnackbar({ children: "User successfully saved", severity: "success" });
      resolve(response);
      setPromiseArguments(null);
    } catch (error) {
      setSnackbar({ children: "Name can't be empty", severity: "error" });
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will change ${mutation}.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div
      style={{ height: 400, width: "50%", margin: "20px" }}
      className={styles.tableShadow}
    >
      {renderConfirmDialog()}
      <DataGrid
        rows={rows}
        columns={columns}
        processRowUpdate={processRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
      />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "age", headerName: "Age", type: "number" },
  {
    field: "bloodpressure",
    headerName: "Blood Presure",
    type: "number",
    flex: 1,
  },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    flex: 1,
  },
  {
    field: "percentage",
    headerName: "Percentage",
    flex: 1,
  },
];

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

const rows = [
  {
    id: 1,
    name: doctorArr[generateRandom(doctorArr)],
    age: 25,
    bloodpressure: 120,
    dateCreated: randomDate(new Date(2012, 0, 1), new Date()),
    percentage: 100,
  },
  {
    id: 2,
    name: doctorArr[generateRandom(doctorArr)],
    age: 36,
    bloodpressure: 130,
    dateCreated: randomDate(new Date(2012, 0, 1), new Date()),
    percentage: 100,
  },
  {
    id: 3,
    name: doctorArr[generateRandom(doctorArr)],
    age: 19,
    bloodpressure: 100,
    dateCreated: randomDate(new Date(2012, 0, 1), new Date()),
    percentage: 100,
  },
  {
    id: 4,
    name: doctorArr[generateRandom(doctorArr)],
    age: 28,
    bloodpressure: 124,
    dateCreated: randomDate(new Date(2012, 0, 1), new Date()),
    percentage: 100,
  },
  {
    id: 5,
    name: doctorArr[generateRandom(doctorArr)],
    age: 23,
    bloodpressure: 130,
    dateCreated: randomDate(new Date(2012, 0, 1), new Date()),
    percentage: 100,
  },
];
