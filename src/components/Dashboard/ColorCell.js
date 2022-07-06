import React from "react";

const Colorcell = (props) => {
  if (props.cellValues.value > 75 && props.cellValues.value <= 100) {
    return (
      <div>
        <div
          style={{
            display: "inline-block",
            borderRadius: "50%",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "3px",
            paddingBottom: "3px",
            backgroundColor: "#81c784",
          }}
        >
          {props.cellValues.value}
        </div>
      </div>
    );
  } else if (props.cellValues.value > 40 && props.cellValues.value <= 75) {
    return (
      <div>
        <div
          style={{
            display: "inline-block",
            borderRadius: "50%",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "3px",
            paddingBottom: "3px",
            backgroundColor: "#ffd54f",
          }}
        >
          {props.cellValues.value}
        </div>
      </div>
    );
  } else if (props.cellValues.value > -1 && props.cellValues.value <= 40) {
    return (
      <div
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   paddingTop: "15px",
      // }}
      >
        <div
          style={{
            display: "inline-block",
            borderRadius: "50%",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "3px",
            paddingBottom: "3px",
            backgroundColor: "#e57373",
          }}
        >
          {props.cellValues.value}
        </div>
      </div>
    );
  }
};

export default Colorcell;
