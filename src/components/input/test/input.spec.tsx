import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Input from "../input";

Enzyme.configure({ adapter: new Adapter() });

describe("input specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render input component", () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Input />);

    expect(wrapper).toHaveLength(1);
  });

  it("renders a text input by default", () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Input />);

    expect(wrapper.prop("type")).toBe("text");
  });

  it("should call onChange function ", () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Input onChange={spy} />);
    const event = { target: { value: "My new value" } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(true);
  });

  it("should not call callback function when changed and input is disabled", () => {
    const spy = sinon.spy();
    const wrapper = mount(<Input disabled />);
    const event = { target: { value: "My new value" } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(false);
  });
});
