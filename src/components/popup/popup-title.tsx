import classNames from "classnames";
import * as React from "react";

function Title(props: any) {
  const classes = classNames(
    props.iconLeft && "popup-icon-left",
    "icon-close",
    "popup-icon-position"
  );
  return (
    <div>
      <i className={classes} />
      <div>{props.children}</div>
    </div>
  );
}

export default Title;
