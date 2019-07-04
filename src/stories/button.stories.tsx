import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("Clicked");

stories.add("Variants", () => (
  <div>
    <Button onClick={action}>
      Primary
    </Button>
    &nbsp;
    <Button variant="primary-outline" onClick={action}>
      Primary
    </Button>
    <br/>
    <br/>
    <Button variant="secondary" onClick={action}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="secondary-outline" onClick={action}>
      Secondary
    </Button>
    <br/>
    <br/>
    <Button variant="success" onClick={action}>
      Success
    </Button>
    &nbsp;
    <Button variant="success-outline" onClick={action}>
      Success outline
    </Button>
  </div>
));

stories.add("Sizes", () => (
  <div>
    <Button variant="primary" size="small" onClick={action}>
      Small
    </Button>
    <br/>
    <br/>
    <Button variant="primary" onClick={action}>
      Default
    </Button>
    <br/>
    <br/>
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
stories.add("Button with Icon", () => (
  <div>
    <Button variant="primary" icon="star" onClick={action}>
      Favorilere ekle
    </Button>
    &nbsp;
    <Button variant="success-outline" icon="like" onClick={action}>
      3
    </Button>
    &nbsp;
    <Button variant="primary-outline" icon="basket" round onClick={action}>
      Sepette %20 indirim
    </Button>
    &nbsp;
    <Button variant="secondary-outline" icon="heart" onClick={action}/>
  </div>
));
