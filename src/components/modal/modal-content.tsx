import React from "react";

const Content = (props: any) => {
  return <div className={"modal-content"}>{props.children}</div>;
};

export default Content;
