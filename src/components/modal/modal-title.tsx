import * as React from "react";

function Title(props: any) {
  return (
    <div className="modal-title">
      <div>{props.children}</div>
    </div>
  );
}

export default Title;
