import { storiesOf } from '@storybook/react';
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

stories.add("Primary", () => (
    <Button
        primary
    >
        Primary
    </Button>
));

stories.add("Secondary", () => (
    <Button
        secondary
    >
        Secondary
    </Button>
));

stories.add("Disabled", () => (
    <Button
        disabled
    >
        Disabled
    </Button>
));
