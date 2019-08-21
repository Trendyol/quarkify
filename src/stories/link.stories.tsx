import { storiesOf } from "@storybook/react";
import React from "react";
import Link from "../components/link";

const stories = storiesOf("Link", module);

const url = "https://github.com/Trendyol/quarkify";

stories.add("Variants", () => (
  <div>
    <Link to={url} size="small">Google</Link>
    &nbsp;
    <Link to={url} variant="secondary" size="small">
      Github
    </Link>
    &nbsp;
    <Link to={url} variant="gray" size="small">
      Github
    </Link>
    <br/>
    <br/>
    <Link to={url}>Google</Link>
    &nbsp;
    <Link to={url} variant="secondary">
      Github
    </Link>
    &nbsp;
    <Link to={url} variant="gray">
      Github
    </Link>
    <br/>
    <br/>
    <Link to={url} size="large">Github</Link>
    &nbsp;
    <Link to={url} variant="secondary" size="large">
      Github
    </Link>
    &nbsp;
    <Link to={url} variant="gray" size="large">
      Github
    </Link>
  </div>
));

stories.add("Disabled", () => (
  <Link to={url} disabled>
    Disabled Github
  </Link>
));
stories.add("Blank", () => (
  <Link target={"_blank"} to={url} variant="primary">
    Github in new tab
  </Link>
));
