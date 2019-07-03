import React from "react";

const Actions = ({children}: {children: any}) => {
  if (children) {
    return <div className="modal-actions">{children}</div>;
  }
  throw new Error("Actions expects children");
};

export default Actions;
