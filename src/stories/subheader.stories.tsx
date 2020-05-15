import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import SubHeader from "../components/subheader";

const stories = storiesOf("SubHeader", module);

const action = () => alert("Clicked");

stories.add("Default", () => (
  <div>
    <SubHeader title={faker.lorem.lines(10)}/>
  </div>
));

stories.add("Subtitle", () => (
  <div>
    <SubHeader title={faker.lorem.words(10)} subTitle={faker.lorem.words(10)} />
    <br/>
    <br/>
    <SubHeader leftIcon="back-button" title={faker.lorem.words(10)} subTitle={faker.lorem.words(10)} />
  </div>
));

stories.add("Subtitle with default/overriden title tag", () => (
  <div>
    <SubHeader title={faker.lorem.words(10)} subTitle={faker.lorem.words(10)} />
    <br />
    <br />
    <SubHeader title={faker.lorem.words(10)} titleComponent={"h1"} subTitle={faker.lorem.words(10)} />
  </div>
));

stories.add("Icons", () => (
  <div>
    <SubHeader leftIcon="back-button" title={faker.lorem.lines(1)}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SubHeader rightIcon="close" title={faker.lorem.lines(1)}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SubHeader leftIcon="search" rightIcon="thumbs-up" title={faker.lorem.lines(1)}/>
  </div>
));

stories.add("Icon with action", () => (
  <div>
    <SubHeader leftIcon="back-button" leftIconOnClick={action} title={faker.lorem.lines(1)}/>
  </div>
));
