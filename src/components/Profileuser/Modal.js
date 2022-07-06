import React from "react";
import classes from "../User/Modal.module.css";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props) => {
  const closeHandler = () => {
    props.onCancel();
  };
  return (
    <div
      className={classes.modal}
      style={{
        width: props.width ? props.width : null,
        height: props.height ? props.height : null,
      }}
    >
      <div className={classes.header}>
        <img src={props.imageSrc} />
        <span style={{ paddingLeft: 10 }}>{props.title}</span>

        <span className={classes.FloatRight} onClick={closeHandler}>
          <span>
            <SaveIcon
              sx={{ color: "#2E1A47", cursor: "pointer", marginRight: "20px" }}
            />
            <CloseIcon onClick={closeHandler} sx={{ cursor: "pointer", width: 30, height: 30 }} />
          </span>
        </span>
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};
export default Modal;
