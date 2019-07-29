import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";
import Select from "../components/select";
import "./styles/select.css";

const stories = storiesOf("Select", module);
const items = [
  {
    id: 1,
    name: "Car",
    variant: "primary",
  },
  {
    id: 2,
    name: "Bike",
    variant: "primary",
  },
  {
    id: 3,
    name: "Plane",
    selected: true,
    variant: "secondary",
  },
];

stories.add("Default", () => (
  <div>
    <Select items={items} value={"id"}/>
  </div>
));

stories.add("Icon", () => (
  <div>
    <Select items={items} value={"id"} leftIcon={"close"}/>
    <br/>
    <br/>
    <Select items={items} value={"id"} rightIcon={"filter"} rightIconColor={"primary"}/>
    <br/>
    <br/>
    <Select items={items} value={"id"} leftIcon={"filter"} leftIconColor={"primary"} rightIcon={"close"}/>
    <br/>
    <br/>
    <div className={"flex"}>
      {/* tslint:disable-next-line:max-line-length */}
      <Select className={"select-w40"} items={items} value={"id"} leftIcon={"filter"} leftIconColor={"primary"} rightIcon={"close"}/>
      <Button className={"button-w60"}>Hello World</Button>
    </div>
  </div>
));

stories.add("Fluid", () => (
  <div>
    <Select fluid items={items} rightIcon={"close"}/>
  </div>
));

stories.add("Disabled", () => (
  <div>
    <Select disabled items={items} rightIcon={"close"}/>
  </div>
));

stories.add("Error", () => (
  <div>
    <Select error items={items} rightIcon={"close"}/>
  </div>
));
