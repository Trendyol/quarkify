import { storiesOf } from "@storybook/react";
import React from "react";
import Select from "../components/select";

const stories = storiesOf("Select", module);
const items = [
  {
    name: "Car",
    value: 1,
    variant: "primary",
  },
  {
    name: "Bike",
    value: 2,
    variant: "primary",
  },
  {
    name: "Plane",
    selected: true,
    value: 3,
    variant: "secondary",
  },
];

stories.add("Default", () => (
  <div>
    <Select items={items} />
  </div>
));

stories.add("Fluid", () => (
  <div>
    <Select fluid items={items} />
  </div>
));
