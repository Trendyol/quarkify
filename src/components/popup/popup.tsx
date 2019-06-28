import classNames from "classnames";
import React from "react";
import "../../styles/components/_popup.scss";
import Button from "../button";

class Popup extends React.PureComponent<IProps> {
  private classes = classNames("popup");
  public render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="popup-overlay">
        <section className="popup-main">
          <h1>Modal</h1>
          <Button onClick={this.showAlert}>Click me</Button>
        </section>
      </div>
    );
  }
  private showAlert = () => {
    alert(1);
  };
}

interface IProps {
  show: boolean;
}

export default Popup;
