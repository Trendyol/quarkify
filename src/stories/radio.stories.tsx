import { storiesOf } from "@storybook/react";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import Radio from "../components/radio";

const stories = storiesOf("Radio", module);

stories.add("Default", () => (
  <div>
    <form>
      <Radio name={"gender"} value={"female"} label={"Female"} />
      <br />
      <br />
      <Radio name={"gender"} value={"male"} label={"Male"} />
      <br />
      <br />
      <Radio name={"gender"} value={"other"} label={"Other"} checked />
      <br />
      <br />
      <Radio name={"gender"} value={"error"} label={"Error"} error />
      <br />
      <br />
      <Radio name={"gender"} value={"disabled"} label={"Disabled"} disabled />
    </form>
  </div>
));
stories.add("Label Size", () => (
  <div>
    <Radio name={"vehicle1"} value={"1"} label={"I have a bike"} labelVariant={"h1"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"2"} label={"I have a bike"} labelVariant={"h2"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"3"} label={"I have a bike"} labelVariant={"h3"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"4"} label={"I have a bike"} labelVariant={"paragraph"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"5"} label={"I have a bike"} labelVariant={"smallParagraph"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"6"} label={"I have a bike"} labelVariant={"body"} />
    <br />
    <br />
    <Radio name={"vehicle1"} value={"7"} label={"I have a bike"} labelVariant={"subtitle"} />
    <br />
    <br />
  </div>
));

const RealExample = () => {
  const [gender, setGender] = React.useState("dont-want");
  const radioButtons = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Do not want to specify", value: "dont-want" },
    { label: "Other", value: "other" },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <p>Selected value: {gender}</p>
      <ul>
        {radioButtons.map((radioButton) => (
          <li key={radioButton.value}>
            <Radio
              name="gender"
              value={radioButton.value}
              label={radioButton.label}
              onChange={handleChange}
              checked={gender === radioButton.value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

stories.add("Real example", () => <RealExample />);
