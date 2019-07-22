import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Accordion from "../components/accordion";
import Button from "../components/button";

const stories = storiesOf("Accordion", module);

const AccordionWrapper = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header>
          Accordion 1
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          Accordion 2
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <h1>Text</h1>
    </>
  );
};

const ControlledAccordionWrapper = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Accordion expanded={expanded} onChange={handleChange}>
        <Accordion.Header>
          Accordion 1
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <Button onClick={handleClick}>Toggle Accordion</Button>
    </>
  );
};

stories.add("Accordion", () => <AccordionWrapper/>);
stories.add("Controlled Accordion", () => <ControlledAccordionWrapper/>);
