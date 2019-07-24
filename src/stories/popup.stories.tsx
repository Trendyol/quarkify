import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Popup from "../components/popup";

const stories = storiesOf("Popup", module);

const PopupWrapper = ({
                        closeOnOverlayClick,
                      }: {
  closeOnOverlayClick?: boolean;
}) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }

  function handleChange(status: boolean) {
    setShow(status);
  }

  return (
    <>
      {Array.from({ length: 15 }, (_, i) => <p>Down {i}</p>)}
      <Button onClick={handleClick}>Toggle Me</Button>
      {Array.from({ length: 15 }, (_, i) => <p>Down {i + 16}</p>)}
      <Popup
        show={show}
        onChange={handleChange}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        {Array.from({ length: 30 }, (_, i) => <p>Line {i}</p>)}
      </Popup>
    </>
  );
};

const PopupBasketWrapper = ({ closeOnOverlayClick }: {
  closeOnOverlayClick?: boolean;
}) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }

  function handleChange(status: boolean) {
    setShow(status);
  }

  return (
    <>
      <Button onClick={handleClick}>Toggle Me</Button>
      <Popup
        show={show}
        onChange={handleChange}
        closeOnOverlayClick={closeOnOverlayClick}
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
};

stories.add("Default", () => <PopupWrapper/>);
stories.add("CloseOnOverlayClick disabled", () => (
  <PopupWrapper closeOnOverlayClick={false}/>
));
stories.add("Urun sepete eklendi", () => <PopupBasketWrapper/>);
