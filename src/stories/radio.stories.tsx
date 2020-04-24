import { storiesOf } from "@storybook/react";
import React, { ChangeEvent } from "react";
import Radio from "../components/radio";

const stories = storiesOf("Radio", module);

stories.add("Default", () => (
  <div>
    <form>
      <Radio name={"gender"} value={"female"} label={"Female"} />
      <br />
      <br />
      <Radio name={"gender"} value={"male"} label={"Male"} defaultChecked />
      <br />
      <br />
      <Radio name={"gender"} value={"other"} label={"Other"} />
      <br />
      <br />
      <Radio name={"gender"} value={"error"} label={"Error"} error />
      <br />
      <br />
      <Radio name={"gender"} value={"disabled"} label={"Disabled"} disabled />
    </form>
  </div>
));

stories.add("General Usage", () => {
  const [selected, setSelected] = React.useState("male");
  const exampleArray = [{ value: "female", label: "Female" }, { value: "male", label: "Male" }, { value: "other", label: "Other" }, { value: "error", label: "Error" }];
  return (
    <div>
      <div>Selecteds: {selected}</div>
      <br />
      <form>
        {exampleArray.map(({ label, value }) => (
           <React.Fragment key={value}>
            <Radio
              name="gender"
              value={value}
              label={label}
              checked={value === selected}
              onChange={() => setSelected(value)}
            />
            <br /><br />
          </React.Fragment>
        ))}
        <Radio name={"gender"} value={"disabled"} label={"Disabled"} disabled />
      </form>
      <select name="gender-selector" value={selected} onChange={(e) => setSelected(e.target.value)}>
        {exampleArray.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div >
  );
});

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
