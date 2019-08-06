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
    variant: "secondary",
  },
];

stories.add("Default", () => (
  <div>
    <Select items={items} value={"id"} selected={"3"}/>
  </div>
));

stories.add("Icon", () => (
  <div>
    <Select items={items} value={"id"} leftIcon={"close"} selected={"3"}/>
    <br/>
    <br/>
    <Select items={items} value={"id"} rightIcon={"filter"} rightIconColor={"primary"} selected={"3"}/>
    <br/>
    <br/>
    {/* tslint:disable-next-line:max-line-length */}
    <Select items={items} value={"id"} leftIcon={"filter"} leftIconColor={"primary"} rightIcon={"close"} selected={"3"}/>
    <br/>
    <br/>
    <div className={"flex"}>
      {/* tslint:disable-next-line:max-line-length */}
      <Select className={"select-w40"} items={items} value={"id"} leftIcon={"filter"} leftIconColor={"primary"} rightIcon={"close"} selected={"3"}/>
      <Button className={"button-w60"} fluid>Hello World</Button>
    </div>
  </div>
));

stories.add("Fluid", () => (
  <div>
    <Select fluid items={items} rightIcon={"close"} selected={"3"}/>
  </div>
));

stories.add("Disabled", () => (
  <div>
    <Select disabled items={items} rightIcon={"close"} selected={"3"}/>
  </div>
));

stories.add("Error", () => (
  <div>
    <Select error items={items} rightIcon={"close"} selected={"3"}/>
  </div>
));
