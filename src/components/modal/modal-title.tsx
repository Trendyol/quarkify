import * as React from "react";

const Title = (props: any) => {
  return (
    <div className="modal-title">
      <div>{props.children}</div>
    </div>
  );
};

export default Title;
