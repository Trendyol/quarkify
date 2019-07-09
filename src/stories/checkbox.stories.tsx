import { storiesOf } from "@storybook/react";
import React from "react";
import CheckBox from "../components/checkbox";

const stories = storiesOf("CheckBox", module);

stories.add("Default", () => (
  <div>
    <CheckBox name={"vehicle1"} value={"Bike"} label={"I have a bike"} />
    <br />
    <br />
    <CheckBox name={"vehicle2"} value={"Car"} label={"I have a car"} />
    <br/>
    <br/>
    <CheckBox error name={"vehicle3"} value={"Plane"} label={"I have a plane"} />
  </div>
));
