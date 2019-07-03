import { storiesOf } from "@storybook/react";
import React from "react";
import Radio from "../components/radio";

const stories = storiesOf("Radio", module);

stories.add("Radio", () => (
  <div>
      <form>
          <Radio name={"gender"} value={"male"} checked label={"Male"}/>
          <Radio name={"gender"} value={"female"} label={"Female"}/>
          <Radio name={"gender"} value={"other"} label={"Other"}/>
      </form>
  </div>
));
