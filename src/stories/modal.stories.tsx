import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";
import Input from "../components/input";

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

const AddressModalWrapper = ({ animation }: IProps) => {
  const [show, setShow] = useState(false);
  function handleChange() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleChange}>Toggle Me</Button>
      <Modal show={show} animation={animation} onClose={closeModal}>
        <Modal.Title>Adres Ekle</Modal.Title>
        <Modal.Content>
          <Input fluid label="E-posta" subtext="Siparis bilgileriniz bu adrese gonderilecektir"/>
          <Input fluid label="Adres Basligi"/>
        </Modal.Content>
        <Modal.Actions>
          <Button fluid disabled onClick={closeModal}>
            Kaydet ve Devam Et
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

stories.add("Default", () => <ModalWrapper />);
stories.add("SlideInLeft", () => <ModalWrapper animation="slideInLeft" />);
stories.add("Address", () => <AddressModalWrapper />);
