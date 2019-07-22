import { storiesOf } from "@storybook/react";
import React from "react";
import Switch from "../components/switch";

const stories = storiesOf("Switch", module);

stories.add("Default", () => (
  <div>
    <form>
      <Switch name={"gender"} value={"female"} label={"Female"} checked/>
      <br/>
      <br/>
      <Switch name={"gender"} value={"male"} label={"Male"}/>
      <br/>
      <br/>
      <Switch name={"gender"} value={"other"} label={"Other"}/>
      <br/>
      <br/>
      <Switch name={"gender"} value={"error"} label={"Error"} error/>
      <br/>
      <br/>
      <Switch name={"gender"} value={"disabled"} label={"Disabled"} disabled/>
    </form>
  </div>
));

stories.add("As radio", () => (
  <div>
    <form>
      <Switch type="radio" name={"gender"} value={"female"} label={"Female"}/>
      <br/>
      <br/>
      <Switch type="radio" name={"gender"} value={"male"} label={"Male"}/>
      <br/>
      <br/>
      <Switch type="radio" name={"gender"} value={"other"} label={"Other"}/>
      <br/>
      <br/>
      <Switch type="radio" name={"gender"} value={"error"} label={"Error"} error/>
      <br/>
      <br/>
      <Switch type="radio" name={"gender"} value={"disabled"} label={"Disabled"} disabled/>
    </form>
  </div>
));
