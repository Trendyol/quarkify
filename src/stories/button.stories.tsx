import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("Clicked");

stories.add("Variants", () => (
  <div>
    <Button onClick={action}>Primary</Button>
    &nbsp;
    <Button variant="secondary" onClick={action}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="gray" onClick={action}>
      Gray
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
stories.add("Button with Icon", () => (
  <div>
    <Button variant="primary" icon="star" onClick={action}>
      Favorilere ekle
    </Button>
    &nbsp;
    <Button variant="secondary" icon="like" onClick={action}>
      3
    </Button>
    &nbsp;
    <Button variant="secondary" icon="basket" round onClick={action}>
      Sepette %20 indirim
    </Button>
    &nbsp;
    <Button variant="secondary" icon="heart" onClick={action} />
  </div>
));
