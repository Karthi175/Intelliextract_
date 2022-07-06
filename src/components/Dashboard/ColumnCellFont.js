import React from "react";

const ColumnCellFont = (props) => {
  return (
    <div
      style={{
        fontSize: 13,
        lineHeight: 19,
        width: "100%",
        textAlign: "center",
      }}
    >
      {props.cellValues.value ? props.cellValues.value : "-"}
    </div>
  );
};

export default ColumnCellFont;
