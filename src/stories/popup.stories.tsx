import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Popup from "../components/popup";

const stories = storiesOf("Popup", module);

const PopupWrapper = () => {
  const [show, setShow] = useState(true);
  function handleChange() {
    setShow(!show);
  }
  function closePopup() {
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleChange}>Toggle Me</Button>
      <Popup show={show} isModal>
        <Popup.Title>My Title</Popup.Title>
        <Popup.Content>
          <p>Content text</p>
        </Popup.Content>
        <Popup.Actions>
          <Button fluid onClick={closePopup}>
            Close
          </Button>
        </Popup.Actions>
      </Popup>
    </>
  );
};

stories.add("Default", () => (
  <>
    <PopupWrapper />
  </>
));
