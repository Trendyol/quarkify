import { storiesOf } from "@storybook/react";
import React from "react";
import Link from "../components/link";

const stories = storiesOf("Link", module);

const url = "https://github.com/Trendyol/quarkify";

stories.add("Variants", () => (
  <div>
    <Link to={url}>Google</Link>
    &nbsp;
    <Link to={url} variant="secondary">
      Google
    </Link>
    &nbsp;
    <Link to={url} variant="gray">
      Google
    </Link>
  </div>
));

stories.add("Disabled", () => (
  <Link to={url} disabled>
    Disabled Google
  </Link>
));
stories.add("Blank", () => (
  <Link target={"_blank"} to={url} variant="primary">
    Google in new tab
  </Link>
));
