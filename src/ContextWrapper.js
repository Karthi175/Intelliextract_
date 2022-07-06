import React, { useState } from "react";
import { createContext } from "react";

export const contextData = React.createContext();

export default function ContextWrapper(props) {
  const [demo, setDemo] = useState();
  const [upload, setUpload] = useState();

  return (
    <contextData.Provider value={[demo, setDemo, upload, setUpload]}>
      {props.children}
    </contextData.Provider>
  );
}
