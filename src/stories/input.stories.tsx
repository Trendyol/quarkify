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
      <Input type={"text"} placeholder={"Placeholder value"} value={value} onChange={handleChange}/>
      <Input type={"text"} placeholder={"Placeholder value"} disabled />
      <Input type={"text"} placeholder={"Required"} required value={value} onChange={handleChange}/>
      <p>Value: {value}</p>
    </div>
  );
};

stories.add("Text", () => {
  return <InputWrapper />;
});

stories.add("Email", () => (
  <div>
    <Input type={"email"} />
    <Input type={"email"} placeholder={"Placeholder value"} />
    <Input type={"email"} placeholder={"Placeholder value"} disabled />
    <Input type={"email"} placeholder={"Placeholder value"} required />
    <Input type={"email"} placeholder={"Placeholder value"} required subtext="required" />
  </div>
));

stories.add("Password", () => (
  <div>
    <Input type={"password"} />
    <Input type={"password"} placeholder={"Placeholder value"} />
    <Input type={"password"} placeholder={"Placeholder value"} disabled />
    <Input type={"password"} placeholder={"Placeholder value"} required />
    <Input type={"password"} placeholder={"Placeholder value"} subtext="required" />
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

stories.add("Size", () => (
  <div>
    <Input variant={"primary"} size={"small"} value={"Small"}/>
    <Input variant={"primary"} value={"Normal"}/>
    <Input variant={"primary"} size={"large"} value={"Large"}/>
  </div>
));
