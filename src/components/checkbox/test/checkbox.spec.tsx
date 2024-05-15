import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";
import CheckBox from "../checkbox";

Enzyme.configure({ adapter: new Adapter() });

describe("checkbox specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render checkbox component", () => {
    const wrapper = shallow(<CheckBox value={"test"}/>);

    expect(wrapper).toHaveLength(1);
  });

  it("should call onChange function ", () => {
    const spy = sandbox.spy();
    const text = faker.lorem.word();
    const wrapper = shallow(<CheckBox value={"test"} onChange={spy}/>);
    const event = { target: { value: text } };

    wrapper.find("input").simulate("change", event);

    expect(spy.calledOnce).toBe(true);
  });

  it("should not call callback function when changed and input is disabled", () => {
    const spy = sandbox.spy();
    const text = faker.lorem.word();
    const wrapper = shallow(<CheckBox value={"test"} disabled/>);
    const event = { target: { value: text } };

    wrapper.simulate("change", event);

    expect(spy.calledOnce).toBe(false);
  });

  it("should render a label", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<CheckBox value={"test"} label={text}/>);

    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should accept additional classNames", () => {
    const testClass = faker.lorem.word();
    const wrapper = shallow(<CheckBox value={"test"} className={testClass}/>);
    expect(wrapper.find(`.${testClass}`)).toHaveLength(1);
  });

  it("should convert text type prop to checkbox type prop", () => {
    const wrapper = shallow(<CheckBox value={"test"} type="text"/>);
    const inputElement = wrapper.find("input");
    expect(inputElement.prop("type")).toBe("checkbox");
  });

  it("should have error className when error prop is passed", () => {
    const wrapper = shallow(<CheckBox value={"test"} error/>);

    expect(wrapper.hasClass("q-error")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<CheckBox value={"test"} className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
