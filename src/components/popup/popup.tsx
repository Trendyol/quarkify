import React from "react";
import "../../styles/components/_popup.scss";
import Actions from "./popup-actions";
import Content from "./popup-content";
import Title from "./popup-title";

function Popup(props: any) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className="popup-overlay"
    >
      <div className="popup-main">
        {props.children}
      </div>
    </div>
  );
}

Popup.Title = Title;
Popup.Actions = Actions;
Popup.Content = Content;

export default Popup;
