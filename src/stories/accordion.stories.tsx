import { storiesOf } from "@storybook/react";
import * as faker from "faker";
import React, { useState } from "react";
import Accordion from "../components/accordion";
import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";

const stories = storiesOf("Accordion", module);

const AccordionWrapper = ({ animation, leftIcon }: IProps) => {
  const [show, setShow] = useState(false);
  function handleChange() {
    setShow(!show);
  }
  function closeModal() {
    setShow(false);
  }
  return (
    <>
      <Accordion>
        <Accordion.Header toggleContent={handleChange}>
          Cinsiyet
        </Accordion.Header>
        <Accordion.Content show={show}>
          Some Content <br/>
          Some Content <br/>
          Some Content <br/>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header toggleContent={handleChange}>
          Cinsiyet
        </Accordion.Header>
        <Accordion.Content show={false}>
          Some Content <br/>
          Some Content <br/>
          Some Content <br/>
        </Accordion.Content>
      </Accordion>
    </>
  );
};

stories.add("Accordion", () => (
  <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
    <Accordion>
      <Accordion.Header>
        Cinsiyet
      </Accordion.Header>
      <Accordion.Content show={true}>
        Some Content
      </Accordion.Content>
    </Accordion>
    <div style={{width: "50%"}}>
      <Accordion>
        <Accordion.Header>
          Cinsiyet
        </Accordion.Header>
      </Accordion>
    </div>
    <div style={{width: "10%"}}>
      <Accordion>
        <Accordion.Header>
          Cinsiyet
        </Accordion.Header>
      </Accordion>
    </div>
  </div>
));

stories.add("Accordion 2", () => <AccordionWrapper />);
