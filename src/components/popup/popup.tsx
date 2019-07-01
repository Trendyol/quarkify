import React from "react";
import Actions from "./popup-actions";
import Content from "./popup-content";
import Title from "./popup-title";

function Popup(props: any) {
  if (!props.show) {
    return null;
  }
  return (
    <div>
      {props.children}
    </div>
  );
}

Popup.Title = Title;
Popup.Actions = Actions;
Popup.Content = Content;

export default Popup;
