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
    <Typography variant={"h4"}>
      h4 Hello there
    </Typography>
    <Typography variant={"h5"}>
      h5 Hello there
    </Typography>
    <Typography variant={"h6"}>
      h6 Hello there
    </Typography>
    <Typography variant={"body1"}>
      body1 Hello there
    </Typography>
    <Typography variant={"body2"}>
      body2 Hello there
    </Typography>
    <Typography variant={"subtitle1"}>
      subtitle1 Hello there
    </Typography>
    <Typography variant={"subtitle2"}>
      subtitle2 Hello there
    </Typography>
  </div>

));
