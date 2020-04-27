import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";
import CheckBox from "../components/checkbox";

const stories = storiesOf("CheckBox", module);

stories.add("Default", () => {
  return (
    <div>
      <CheckBox name={"vehicle1"} value={"Bike"} label={"I have a bike"} />
      <br />
      <br />
      <CheckBox name={"vehicle2"} value={"Car"} label={"I have a car"} />
      <br />
      <br />
      <CheckBox
        error
        name={"vehicle3"}
        value={"Plane"}
        label={"I have a plane"}
      />
      <br />
      <br />
      <CheckBox
        disabled
        name={"vehicle4"}
        value={"Boat"}
        label={"I have a boat"}
      />
    </div>
  );
});

stories.add("General Usage", () => {
  const [selecteds, setSelecteds] = React.useState(["male"]);
  const exampleArray = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
    { value: "error", label: "Error" }];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelecteds = event.target.checked ?
      [...selecteds, event.target.value] :
      selecteds.filter((s) => s !== event.target.value);
    setSelecteds(newSelecteds);
  };

  const handleButtonClick = () => {
    setSelecteds(selecteds.includes("female") ? selecteds.filter((s) => s !== "female") : ([...selecteds, "female"]));
  };

  return (
    <div>
      <form>
        <div>Selecteds: {JSON.stringify(selecteds)}</div>
        <br />
        {exampleArray.map(({ label, value }) => (
          <React.Fragment key={value}>
            <CheckBox
              name="gender"
              value={value}
              label={label}
              checked={selecteds.includes(value)}
              onChange={handleChange}
            />
            <br /><br />
          </React.Fragment>
        ))}
        <CheckBox name={"gender"} value={"disabled"} label={"Disabled"} disabled />
      </form>
      <Button
        onClick={handleButtonClick}
      >
        Toggle Female Select
      </Button>
    </div >
  );
});

stories.add("Label Size", () => (
  <div>
    <CheckBox name={"vehicle1"} value={"1"} label={"I have a bike"} labelVariant={"h1"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"2"} label={"I have a bike"} labelVariant={"h2"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"3"} label={"I have a bike"} labelVariant={"h3"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"4"} label={"I have a bike"} labelVariant={"paragraph"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"5"} label={"I have a bike"} labelVariant={"smallParagraph"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"6"} label={"I have a bike"} labelVariant={"body"} />
    <br />
    <br />
    <CheckBox name={"vehicle1"} value={"7"} label={"I have a bike"} labelVariant={"subtitle"} />
    <br />
    <br />
  </div>
));
