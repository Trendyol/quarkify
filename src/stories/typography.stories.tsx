import { storiesOf } from "@storybook/react";
import React from "react";
import Typography from "../components/typography";

const stories = storiesOf("Typography", module);

stories.add("Default", () => (
  <div>
    <Typography variant={"h1"} component={"h2"}>
      h1 Hello there
    </Typography>
    <Typography variant={"h2"}>
      h2 Hello there
    </Typography>
    <Typography variant={"h3"}>
      h3 Hello there
    </Typography>
    <Typography variant={"paragraph"}>
      paragraph Hello there
    </Typography>
    <Typography variant={"smallParagraph"}>
      small-paragraph Hello there
    </Typography>
  </div>

));
