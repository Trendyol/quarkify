import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Popup from "../components/popup";

const stories = storiesOf("Popup", module);

class PopupWrapper extends PureComponent<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <>
        {Array.from({ length: 15 }, (_, i) => <p>Down {i}</p>)}
        <Button onClick={this.handleClick}>Toggle Me</Button>
        {Array.from({ length: 15 }, (_, i) => <p>Down {i + 16}</p>)}
        <Popup
          show={this.state.show}
          onChange={this.handleChange}
          closeOnOverlayClick={false}
        >
          {Array.from({ length: 30 }, (_, i) => <p>Line {i}</p>)}
        </Popup>
      </>
    );
  }

  private handleClick() {
    this.setState({
      show: true,
    });
  }

  private handleChange(status: boolean) {
    this.setState({
      show: status,
    });
  }
}

// tslint:disable-next-line:max-classes-per-file
class PopupBasketWrapper extends PureComponent<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <>
        <Button onClick={this.handleClick}>Toggle Me</Button>
        <Popup
          show={this.state.show}
          onChange={this.handleChange}
          closeOnOverlayClick={false}
        >
          <Icon name="basket" style={{ fontSize: "6rem" }}/>
          <h1>URUN SEPETINE EKLENDI</h1>
          <h4 style={{ color: "grey" }}>
            Alışverişe devam etmek mi istersin sepete gitmek mi?
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "60px",
            }}
          >
            <Button variant="secondary" style={{ flex: 1, margin: "0 5px" }}>
              Alisverise Devam Et
            </Button>
            <Button variant="primary" style={{ flex: 1, margin: "0 5px" }}>
              Sepete Git (1)
            </Button>
          </div>
        </Popup>
      </>
    );
  }

  private handleClick() {
    this.setState({
      show: true,
    });
  }

  private handleChange(status: boolean) {
    this.setState({
      show: status,
    });
  }
}

stories.add("Default", () => <PopupWrapper/>);
stories.add("CloseOnOverlayClick disabled", () => (
  <PopupWrapper/>
));
stories.add("Urun sepete eklendi", () => <PopupBasketWrapper/>);
