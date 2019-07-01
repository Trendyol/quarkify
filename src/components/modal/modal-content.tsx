import React from "react";

function Content(props: any) {
  return <div className={"modal-content"}>{props.children}</div>;
}

export default Content;
