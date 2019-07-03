import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Popup from "../components/popup";

const stories = storiesOf("Popup", module);

const PopupWrapper = ({closeOnOverlayClick}: {closeOnOverlayClick?: boolean}) => {
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
      <Popup show={show} onClose={closePopup} closeOnOverlayClick={closeOnOverlayClick}>
        <p>Popup content</p>
      </Popup>
    </>
  );
};

stories.add("Default", () => <PopupWrapper />);
stories.add("CloseOnOverlayClick disabled", () => <PopupWrapper closeOnOverlayClick={false}/>);
