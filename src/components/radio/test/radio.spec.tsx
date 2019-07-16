import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Radio from "../radio";

Enzyme.configure({ adapter: new Adapter() });

describe("radio specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render radio component", () => {
    const wrapper = shallow(<Radio value={"test"} />);

    expect(wrapper).toHaveLength(1);
  });

  it("should call onChange function ", () => {
    const spy = sandbox.spy();
    const text = faker.random.word();
    const wrapper = shallow(<Radio value={"test"} onChange={spy} />);
    const event = { target: { value: text } };

    wrapper.find("input").simulate("change", event);

    expect(spy.calledOnce).toBe(true);
  });

  it("should not call callback function when changed and input is disabled", () => {
    const spy = sandbox.spy();
    const text = faker.random.word();
    const wrapper = shallow(<Radio value={"test"} disabled />);
    const event = { target: { value: text } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(false);
  });

  it("should render a label", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Radio value={"test"} label={text} />);

    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should accept additional classNames", () => {
    const testClass = faker.lorem.word();
    const wrapper = shallow(<Radio value={"test"} className={testClass} />);
    expect(wrapper.find(`.${testClass}`)).toHaveLength(1);
  });

  it("should convert text type prop to radio type prop", () => {
    const wrapper = shallow(<Radio value={"test"} type="text" />);
    const inputElement = wrapper.find("input");
    expect(inputElement.prop("type")).toBe("radio");
  });

  it("should have error className when error prop is passed", () => {
    const wrapper = shallow(<Radio value={"test"}  error />);

    expect(wrapper.hasClass("error")).toBe(true);
  });
});
