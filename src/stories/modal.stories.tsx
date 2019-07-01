import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";

const stories = storiesOf("Modal", module);

const ModalWrapper = () => {
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
      <Modal show={show}>
        <Modal.Title>My Title</Modal.Title>
        <Modal.Content>
          <p>Content text</p>
        </Modal.Content>
        <Modal.Actions>
          <Button fluid onClick={closePopup}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

stories.add("Default", () => <ModalWrapper />);
