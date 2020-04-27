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

  const handleSelect = (e: any) => {
    setValue(e.target.value);
  };

  const handleButton = () => {
    setValue(value === "1" ? "2" : "1");
  };

  return (
    <div className={"flex"}>
      <Select
        className={"select-w40"}
        items={items}
        fluid
        valueKey="id"
        leftIcon="filter"
        leftIconColor="primary"
        rightIcon="close"
        value={value}
        onChange={handleSelect}
      />
      <Button className={"button-w60"} onClick={handleButton} fluid>Hello World</Button>
    </div>
  );
});

stories.add("Icon", () => {

  return (
    <div>
      <Select items={items} valueKey="id" leftIcon={"close"} />
      <br />
      <br />
      <Select items={items} valueKey="id" rightIcon={"chevron-down"} />
      <br />
      <br />
      <Select items={items} valueKey="id" leftIcon="filter" leftIconColor="primary" rightIcon="close" />
    </div>
  );
});

stories.add("Fluid", () => (
  <div>
    <Select fluid items={items} rightIcon="close" />
  </div>
));

stories.add("Disabled", () => (
  <div>
    <Select disabled items={items} rightIcon="close" />
  </div>
));

stories.add("Error", () => (
  <div>
    <Select error items={items} rightIcon={"close"} />
  </div>
));
