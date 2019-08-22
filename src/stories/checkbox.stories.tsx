import { storiesOf } from "@storybook/react";
import React from "react";
import CheckBox from "../components/checkbox";

const stories = storiesOf("CheckBox", module);

stories.add("Default", () => (
  <div>
    <CheckBox name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
    <br/>
    <br/>
    <CheckBox name={"vehicle2"} value={"Car"} label={"I have a car"}/>
    <br/>
    <br/>
    <CheckBox name={"vehicle2"} value={"Car2"} label={"I have a car"} checked/>
    <br/>
    <br/>
    <CheckBox
      error
      name={"vehicle3"}
      value={"Plane"}
      label={"I have a plane"}
    />
    <br/>
    <br/>
    <CheckBox
      disabled
      name={"vehicle4"}
      value={"Boat"}
      label={"I have a boat"}
    />
  </div>
));
stories.add("Label Size", () => (
  <div>
      <CheckBox name={"vehicle1"} value={"1"} label={"I have a bike"} labelVariant={"h1"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"2"} label={"I have a bike"} labelVariant={"h2"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"3"} label={"I have a bike"} labelVariant={"h3"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"4"} label={"I have a bike"} labelVariant={"paragraph"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"5"} label={"I have a bike"} labelVariant={"smallParagraph"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"6"} label={"I have a bike"} labelVariant={"body"}/>
      <br/>
      <br/>
      <CheckBox name={"vehicle1"} value={"7"} label={"I have a bike"} labelVariant={"subtitle"}/>
      <br/>
      <br/>
  </div>
));
