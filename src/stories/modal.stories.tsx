import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";

const stories = storiesOf("Modal", module);

interface IProps {
  animation?: string;
}

const ModalWrapper = ({ animation }: IProps) => {
  const [show, setShow] = useState(false);
  function handleChange() {
    setShow(!show);
  }
  function closeModal() {
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleChange}>Toggle Me</Button>
      <Modal show={show} animation={animation} onClose={closeModal}>
        <Modal.Title>My Title</Modal.Title>
        <Modal.Actions>
          <Button fluid onClick={closeModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

stories.add("Default", () => <ModalWrapper />);
stories.add("SlideInLeft", () => <ModalWrapper animation="slideInLeft" />);
