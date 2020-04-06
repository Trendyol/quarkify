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

const wrapperClasses = { display: "flex", padding: "5px" };

stories.add("When count is 0", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            count={0}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When count is 1", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            count={1}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When count higher then 1", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            count={2}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("When no count specified", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));

stories.add("Fluid", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            size={"small"}
            fluid={true}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div >
));

stories.add("Loading", () => (
    <div style={wrapperClasses}>
        <QuantitySelector
            size={"small"}
            fluid={true}
            loading={true}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div >
));

stories.add("Sizes", () => (
    <div>
        <p>large</p>
        <br />
        <QuantitySelector
            size={"large"}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
        <br />
        <p>medium</p>
        <br />
        <QuantitySelector
            size={"medium"}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
        <br />
        <p>small</p>
        <br />
        <QuantitySelector
            size={"small"}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
        <br />
        <p>xsmall</p>
        <br />
        <QuantitySelector
            size={"xsmall"}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </div>
));
