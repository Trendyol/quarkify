import { storiesOf } from "@storybook/react";
import * as faker from "faker";
import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { animationTypes } from "../types/modal";

const stories = storiesOf("Modal", module);

interface IProps {
  animation?: animationTypes;
  rightIcon?: string;
  leftIcon?: string;
}

const ModalWrapper = ({ animation, leftIcon, rightIcon }: IProps) => {
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
      <Modal show={show} animation={animation}>
        <Modal.Header
          rightIconOnClick={closeModal}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          leftIconOnClick={closeModal}
        >
          Cok y cok g cok cok cok cok cok cok cok cok cok cok cok cok cok cok
          cok uzun title
        </Modal.Header>
        <Modal.Content>
          <p>{faker.lorem.words(1000)}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal} fluid>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

const AddressModalWrapper = ({ animation, leftIcon, rightIcon }: IProps) => {
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
      <Modal show={show} animation={animation}>
        <Modal.Header rightIcon={rightIcon} rightIconOnClick={closeModal}>Adres Ekle</Modal.Header>
        <Modal.Content>
          <Input
            fluid
            label="E-posta"
            subtext="Siparis bilgileriniz bu adrese gonderilecektir"
          />
          <Input fluid label="Adres Basligi"/>
          <div style={{ display: "flex" }}>
            <Input style={{ width: "100" }} fluid label="Ad"/>
            <Input style={{ width: "100" }} fluid label="Soyad"/>
          </div>
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

stories.add("Default", () => <ModalWrapper/>);
stories.add("Left Icon", () => (
  <ModalWrapper leftIcon="back-button"/>
));
stories.add("Right Icon", () => (
  <ModalWrapper rightIcon="close"/>
));
stories.add("SlideInLeft", () => <ModalWrapper animation="slideInLeft" rightIcon="close"/>);
stories.add("SlideInDown", () => <ModalWrapper animation="slideInDown" rightIcon="close"/>);
stories.add("SlideInUp", () => <ModalWrapper animation="slideInUp" rightIcon="close"/>);
stories.add("Address", () => <AddressModalWrapper rightIcon="close"/>);
