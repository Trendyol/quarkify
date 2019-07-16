import React from "react";

const Content = ({className, children}: {className?: string, children: any}) => {
  return <div className={`q-modal-content ${className}`}>{children}</div>;
};

export default Content;
