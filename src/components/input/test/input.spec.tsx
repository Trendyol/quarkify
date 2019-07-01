import Enzyme, { shallow } from "enzyme";
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
    const wrapper = shallow(<Input />);

    expect(wrapper).toHaveLength(1);
  });

  it("renders a text input by default", () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.prop("type")).toBe("text");
  });

  it("should call onChange function ", () => {
    const spy = sandbox.spy();
    const text = faker.random.word();
    const wrapper = shallow(<Input onChange={spy} />);
    const event = { target: { value: text } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(true);
  });

  it("should not call callback function when changed and input is disabled", () => {
    const spy = sandbox.spy();
    const text = faker.random.word();
    const wrapper = shallow(<Input disabled />);
    const event = { target: { value: text } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(false);
  });
});
