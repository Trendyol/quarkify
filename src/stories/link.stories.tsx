import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Link from "../components/link";

const stories = storiesOf("Link", module);

const action = () => alert("Clicked");
// tslint:disable-next-line:no-console
const actionLog = () => console.log("Clicked");

stories.add("Variants", () => (
  <div>
    <Link to={"https://google.com"}>Google</Link>
    &nbsp;
    <Link to={"https://google.com"} variant="secondary">
      Google
    </Link>
    &nbsp;
    <Link to={"https://google.com"} variant="gray">
      Google
    </Link>
  </div>
));

stories.add("Disabled", () => (
  <Link to={"https://google.com"} disabled>
    Disabled Google
  </Link>
));
stories.add("Blank", () => (
  <Link target={"_blank"} to={"https://google.com"} variant="primary">
    Google in new tab
  </Link>
));
