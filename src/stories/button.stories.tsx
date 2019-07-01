import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("click");

stories.add("Variants", () => (
  <div>
    <Button onClick={action}>Primary</Button>
    <Button variant="secondary" onClick={action}>
      Secondary
    </Button>
  </div>
));

stories.add("Sizes", () => (
  <div>
    <Button variant="primary" size="small" onClick={action}>
      Small
    </Button>
    <Button variant="primary" onClick={action}>
      Default
    </Button>
    <Button variant="primary" size="large" onClick={action}>
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
  <Button variant="primary" fluid onClick={action}>
    Fluid
  </Button>
));
