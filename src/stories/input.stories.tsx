import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Input from "../components/input";

const stories = storiesOf("Input", module);

const InputWrapper = () => {
  const [value, setValue] = useState();

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div>
      <Input type={"text"} value={value} onChange={handleChange} />
      <Input
        type={"text"}
        placeholder={"Placeholder value"}
        value={value}
        onChange={handleChange}
      />
      <Input type={"text"} placeholder={"Disabled"} disabled />
      <Input type={"text"} placeholder={"Error"} error />
      <Input
        type={"text"}
        placeholder={"Required"}
        required
        value={value}
        onChange={handleChange}
      />
      <Input
        type={"text"}
        value={value}
        placeholder={"Primary"}
        onChange={handleChange}
      />
      <Input
        type={"text"}
        value={value}
        placeholder={"Secondary"}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
};

stories.add("Text", () => {
  return <InputWrapper />;
});

stories.add("Text with Label", () => (
  <div>
    <Input type={"text"} label={"Text with label"} />
    <br/>
    <br/>
    <Input type={"text"} label={"Text with label"} disabled />
  </div>
));

stories.add("Fluid", () => (
  <div>
    <Input
      fluid
      type={"text"}
      value="this is a fluid input
    this is a fluid input
    this is a fluid input
    this is a fluid input"
    />
  </div>
));

stories.add("Email", () => (
  <div>
    <Input type={"email"} />
    <Input type={"email"} placeholder={"Placeholder value"} />
    <Input type={"email"} placeholder={"Placeholder value"} disabled />
    <Input type={"email"} placeholder={"Placeholder value"} required />
    <Input
      type={"email"}
      placeholder={"Placeholder value"}
      required
      subtext="required"
    />
  </div>
));

stories.add("Password", () => (
  <div>
    <Input type={"password"} />
    <Input type={"password"} placeholder={"Placeholder value"} />
    <Input type={"password"} placeholder={"Placeholder value"} disabled />
    <Input type={"password"} placeholder={"Placeholder value"} required />
    <Input
      type={"password"}
      placeholder={"Placeholder value"}
      subtext="required"
    />
  </div>
));

stories.add("Submit", () => (
  <div>
    <Input type={"submit"} value={"Send"} />
    <Input type={"submit"} value={"Send"} />
    <Input
      type={"submit"}
      placeholder={"Placeholder value"}
      disabled
      value={"Send"}
    />
  </div>
));

stories.add("Reset", () => (
  <div>
    <form>
      <Input type={"text"} name={"firstName"} defaultValue={"Mickey"} />
      <Input type={"text"} name={"secondName"} defaultValue={"Mouse"} />
      <Input type="submit" value="Submit" />
      <Input type="reset" />
    </form>
  </div>
));
