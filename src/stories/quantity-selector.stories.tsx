import { storiesOf } from "@storybook/react";
import React from "react";
import QuantitySelector from "../components/quantity-selector";
import "./styles/select.css";

const stories = storiesOf("QuantitySelector", module);

function onIncrement() {
    console.log("onIncrement");
}

function onDecrement() {
    console.log("onIncrement");
}

stories.add("When count is 0", () => (
    <div>
        <QuantitySelector
            count={0}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When count is 1", () => (
    <div>
        <QuantitySelector
            count={1}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When count higher then 1", () => (
    <div>
        <QuantitySelector
            count={2}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When no count specified", () => (
    <div>
        <QuantitySelector
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));
