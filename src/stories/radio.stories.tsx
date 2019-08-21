import { storiesOf } from "@storybook/react";
import React from "react";
import Radio from "../components/radio";

const stories = storiesOf("Radio", module);

stories.add("Default", () => (
  <div>
    <form>
      <Radio name={"gender"} value={"female"} label={"Female"}/>
      <br/>
      <br/>
      <Radio name={"gender"} value={"male"} label={"Male"}/>
      <br/>
      <br/>
      <Radio name={"gender"} value={"other"} label={"Other"} checked/>
      <br/>
      <br/>
      <Radio name={"gender"} value={"error"} label={"Error"} error/>
      <br/>
      <br/>
      <Radio name={"gender"} value={"disabled"} label={"Disabled"} disabled/>
    </form>
  </div>
));
stories.add("Label Size", () => (
  <div>
    <Radio name={"vehicle1"} value={"1"} label={"I have a bike"} labelVariant={"h1"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"2"} label={"I have a bike"} labelVariant={"h2"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"3"} label={"I have a bike"} labelVariant={"h3"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"4"} label={"I have a bike"} labelVariant={"paragraph"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"5"} label={"I have a bike"} labelVariant={"smallParagraph"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"6"} label={"I have a bike"} labelVariant={"body"}/>
    <br/>
    <br/>
    <Radio name={"vehicle1"} value={"7"} label={"I have a bike"} labelVariant={"subtitle"}/>
    <br/>
    <br/>
  </div>
));
