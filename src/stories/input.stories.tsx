import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Input from "../components/input";

const stories = storiesOf("Input", module);

class InputWrapper extends PureComponent<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    return (
      <div>
        <Input type={"text"} value={this.state.value} onChange={this.handleChange}/>
        <Input
          type={"text"}
          placeholder={"Placeholder value"}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Input type={"text"} placeholder={"Disabled"} disabled/>
        <Input type={"text"} placeholder={"Error"} error/>
        <Input
          type={"text"}
          placeholder={"Required"}
          required
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Input
          type={"text"}
          value={this.state.value}
          placeholder={"Primary"}
          onChange={this.handleChange}
        />
        <Input
          type={"text"}
          value={this.state.value}
          placeholder={"Secondary"}
          onChange={this.handleChange}
        />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }

  private handleChange(e: any) {
    this.setState({
      value: e.target.value,
    });
  }
}

stories.add("Text", () => {
  return <InputWrapper/>;
});

stories.add("Text with Label", () => (
  <div>
    <Input type={"text"} label={"Text with label"}/>
    <br/>
    <br/>
    <Input type={"text"} label={"Text with label"} disabled/>
  </div>
));

stories.add("Error", () => (
  <div>
    <Input
      type={"text"}
      label={"Text with label"}
      subtext={"Hello mymy"}
      error
      errorMessage={"Hata ve Uyarı Mesajı!"}
    />
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
    <Input type={"email"}/>
    <Input type={"email"} placeholder={"Placeholder value"}/>
    <Input type={"email"} placeholder={"Placeholder value"} disabled/>
    <Input type={"email"} placeholder={"Placeholder value"} required/>
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
    <Input type={"password"}/>
    <Input type={"password"} placeholder={"Placeholder value"}/>
    <Input type={"password"} placeholder={"Placeholder value"} disabled/>
    <Input type={"password"} placeholder={"Placeholder value"} required/>
    <Input
      type={"password"}
      placeholder={"Placeholder value"}
      subtext="required"
    />
  </div>
));

stories.add("Submit", () => (
  <div>
    <Input type={"submit"} value={"Send"}/>
    <Input type={"submit"} value={"Send"}/>
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
      <Input type={"text"} name={"firstName"} defaultValue={"Mickey"}/>
      <Input type={"text"} name={"secondName"} defaultValue={"Mouse"}/>
      <Input type="submit" value="Submit"/>
      <Input type="reset"/>
    </form>
  </div>
));
