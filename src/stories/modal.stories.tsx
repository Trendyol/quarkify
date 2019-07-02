import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { animationTypes } from "../types/modal";

const stories = storiesOf("Modal", module);

interface IProps {
  animation?: animationTypes;
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
        <Modal.Content>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
        </Modal.Content>
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
stories.add("SlideInDown", () => <ModalWrapper animation="slideInDown" />);
stories.add("SlideInUp", () => <ModalWrapper animation="slideInUp" />);
stories.add("Address", () => <AddressModalWrapper />);
