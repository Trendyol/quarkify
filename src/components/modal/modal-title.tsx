import classNames from "classnames";
import * as React from "react";

function Title(props: any) {
  const classes = classNames(
    props.iconLeft && "modal-icon-left",
    "icon-close",
    "modal-icon-position"
  );
  return (
    <div className={"popup-title"}>
      <i className={classes} />
      <div>{props.children}</div>
    </div>
  );
}

export default Title;
