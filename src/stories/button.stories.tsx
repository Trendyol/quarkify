import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("click");

stories.add("Types", () => (
  <div>
    <Button onClick={action}>Primary</Button>
    <Button type="secondary" onClick={action}>
      Secondary
    </Button>
  </div>
));

stories.add("Sizes", () => (
  <div>
    <Button type="primary" size="small" onClick={action}>
      Small
    </Button>
    <Button type="primary" onClick={action}>
      Default
    </Button>
    <Button type="primary" size="large" onClick={action}>
      Large
    </Button>
  </div>
));

stories.add("Disabled", () => (
  <Button disabled onClick={action}>
    Disabled
  </Button>
));
stories.add("Fluid", () => (
  <Button type="primary" fluid onClick={action}>
    Fluid
  </Button>
));
