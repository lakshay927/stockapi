import React from "react";

import AppLogo from "./AppLogo";
import ScripInfo from "./ScripInfo";

function HeaderInfo(props) {
  const Parentdiv = {
    background: "whitesmoke",
    textAlign: "left",
    display: "flex",
    width: 300,
    alignItems: "center",
  };
  return (
    <div style={Parentdiv}>
      <ScripInfo info={props.info} />
      <AppLogo />
    </div>
  );
}

export default HeaderInfo;
