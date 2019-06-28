import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "../components/input";

const stories = storiesOf("Input", module);

const action = () => alert("click");

stories.add("Text", () => (
  <div>
    <Input type={"text"} variant="primary"/>
    <Input type={"text"} placeholder={"Placeholder value"}/>
    <Input type={"text"} placeholder={"Placeholder value"} disabled/>
    <Input type={"text"} placeholder={"Placeholder value"} error/>
    <Input type={"text"} placeholder={"Required"} required/>
  </div>
));

stories.add("Email", () => (
  <div>
    <Input type={"email"}/>
    <Input type={"email"} placeholder={"Placeholder value"}/>
    <Input type={"email"} placeholder={"Placeholder value"} disabled/>
    <Input type={"email"} placeholder={"Placeholder value"} error/>
    <Input type={"email"} placeholder={"Placeholder value"} required/>
  </div>
));

stories.add("Password", () => (
  <div>
    <Input type={"password"}/>
    <Input type={"password"} placeholder={"Placeholder value"}/>
    <Input type={"password"} placeholder={"Placeholder value"} disabled/>
    <Input type={"password"} placeholder={"Placeholder value"} error/>
    <Input type={"password"} placeholder={"Placeholder value"} required/>
  </div>
));

stories.add("Submit", () => (
  <div>
    <Input type={"submit"} value={"Send"}/>
    <Input type={"submit"} value={"Send"}/>
    <Input type={"submit"} placeholder={"Placeholder value"} disabled value={"Send"}/>
  </div>
));

stories.add("Reset", () => (
  <div>
    <form>
      <Input type={"text"} name={"firstname"} defaultValue={"Mickey"}/>
      <Input type={"text"} name={"secondname"} defaultValue={"Mouse"}/>
      <Input type="submit" value="Submit" />
      <Input type="reset"/>
    </form>
  </div>
));

stories.add("Radio", () => (
  <div>
    <Input type={"radio"} name={"gender"} value={"male"} checked/>Male
    <Input type={"radio"} name={"gender"} value={"female"}/>Female
    <Input type={"radio"} name={"gender"} value={"other"}/>Other
  </div>
));

stories.add("Checkbox", () => (
  <div>
    <Input type={"checkbox"} name={"vehicle1"} value={"Bike"}/>I have a bike
    <Input type={"checkbox"} name={"vehicle2"} value={"Car"}/>I have a car
  </div>
));
