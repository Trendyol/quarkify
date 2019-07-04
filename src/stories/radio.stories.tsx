import { storiesOf } from "@storybook/react";
import React from "react";
import Radio from "../components/radio";

const stories = storiesOf("Radio", module);

stories.add("Default", () => (
  <div>
    <form>
      <Radio name={"gender"} value={"female"} label={"Female"} />
      <br />
      <br />
      <Radio name={"gender"} value={"male"} label={"Male"} />
      <br />
      <br />
      <Radio name={"gender"} value={"other"} label={"Other"} />
    </form>
  </div>
));
