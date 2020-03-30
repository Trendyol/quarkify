import { storiesOf } from "@storybook/react";
import React from "react";
import QuantitySelector from "../components/quantity-selector";
import "./styles/select.css";

const stories = storiesOf("QuantitySelector", module);

function OnIncrementClick() {
    console.log("onIncrementClick");
}

function onDecrementClick() {
    console.log("onIncrementClick");
}

stories.add("When count is 0", () => (
    <div>
        <QuantitySelector
            count={0}
            onIncrementClick={OnIncrementClick}
            onDecrementClick={onDecrementClick}
            buttonText="Sepete Ekle"
        />
    </div>
));

stories.add("When count is 1", () => (
    <div>
        <QuantitySelector
            count={1}
            onIncrementClick={OnIncrementClick}
            onDecrementClick={onDecrementClick}
            buttonText="Sepete Ekle"
        />
    </div>
));

stories.add("When count higher then 1", () => (
    <div>
        <QuantitySelector
            count={2}
            onIncrementClick={OnIncrementClick}
            onDecrementClick={onDecrementClick}
            buttonText="Sepete Ekle"
        />
    </div>
));

stories.add("When no count specified", () => (
    <div>
        <QuantitySelector
            onIncrementClick={OnIncrementClick}
            onDecrementClick={onDecrementClick}
            buttonText="Sepete Ekle"
        />
    </div>
));
