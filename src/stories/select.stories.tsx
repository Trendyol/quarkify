import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";
import Select from "../components/select";

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
    <Select items={items} valueKey={"id"} />
  </div>
));

stories.add("General Usage", () => {
  const [value, setValue] = React.useState("2");

  return (
    <div>
      <Select items={items} valueKey="id" value={value} leftIcon={"close"} onChange={(e) => setValue(e.target.value)}/>
      <br />
      <br />
      <Select items={items} valueKey="id" rightIcon={"chevron-down"} value="2" />
      <br />
      <br />
      <Select items={items} valueKey="id" leftIcon="filter" leftIconColor="primary" rightIcon="close" value="3" />
      <br />
      <br />
      <div className={"flex"}>
        <Select className={"select-w40"} items={items} fluid valueKey="id" leftIcon="filter" leftIconColor="primary" rightIcon="close" value="3" />
        <Button className={"button-w60"} onClick={(e) => {setValue(value === "1" ? "2" : "1"); }} fluid>Hello World</Button>
      </div>
    </div>
  );
});

stories.add("Icon", () => {
  const [value, setValue] = React.useState("2");

  return (
    <div>
      <Select items={items} valueKey="id" value={value} leftIcon={"close"} onChange={(e) => setValue(e.target.value)}/>
      <br />
      <br />
      <Select items={items} valueKey="id" rightIcon={"chevron-down"} value="2" />
      <br />
      <br />
      <Select items={items} valueKey="id" leftIcon="filter" leftIconColor="primary" rightIcon="close" value="3" />
      <br />
      <br />
      <div className={"flex"}>
        <Select className={"select-w40"} items={items} fluid valueKey="id" leftIcon="filter" leftIconColor="primary" rightIcon="close" value="3" />
        <Button className={"button-w60"} onClick={(e) => {setValue(value === "1" ? "2" : "1"); }} fluid>Hello World</Button>
      </div>
    </div>
  );
});

stories.add("Fluid", () => (
  <div>
    <Select fluid items={items} rightIcon="close" selected="3" />
  </div>
));

stories.add("Disabled", () => (
  <div>
    <Select disabled items={items} rightIcon="close" selected="3" />
  </div>
));

stories.add("Error", () => (
  <div>
    <Select error items={items} rightIcon={"close"} selected={"3"} />
  </div>
));
