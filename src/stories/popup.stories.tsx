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
  function handleChange() {
    setShow(!show);
  }
  function closePopup() {
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleChange}>Toggle Me</Button>
      <Popup
        show={show}
        onClose={closePopup}
        closeOnOverlayClick={closeOnOverlayClick}
      />
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
      <p>Popup content</p>
    </>
  );
};

const PopupBasketWrapper = ({
  closeOnOverlayClick,
}: {
  closeOnOverlayClick?: boolean;
}) => {
  const [show, setShow] = useState(false);
  function handleChange() {
    setShow(!show);
  }
  function closePopup() {
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleChange}>Toggle Me</Button>
      <Popup
        show={show}
        onClose={closePopup}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        <Icon name="basket" style={{ fontSize: "6rem" }} />
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
          <Button
            variant="secondary-outline"
            style={{ flex: 1, margin: "0 5px" }}
          >
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

stories.add("Default", () => <PopupWrapper />);
stories.add("CloseOnOverlayClick disabled", () => (
  <PopupWrapper closeOnOverlayClick={false} />
));
stories.add("Urun sepete eklendi", () => <PopupBasketWrapper />);
