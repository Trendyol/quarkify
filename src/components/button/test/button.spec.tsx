import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../button";
import faker from "faker";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

describe("button specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render button component", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Button onClick={() => {}}>{text}</Button>);

    expect(wrapper.text()).toEqual(text);
  });

  it("should call callback function when clicked", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Button onClick={spy} />);

    wrapper.find("button").simulate("click");

    expect(spy.calledOnce).toEqual(true);
  });

  it("should not call callback function when clicked but button is disabled", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Button onClick={spy} disabled />);

    wrapper.find("button").simulate("click");

    expect(spy.callCount).toEqual(0);
  });

  it("should be rendered with given primary variant prop", () => {
    const wrapper = shallow(<Button onClick={() => {}} variant="primary" />);

    expect(wrapper.exists(".primary")).toEqual(true);
  });

  it("should be rendered with given large size prop", () => {
    const wrapper = shallow(<Button onClick={() => {}} size="large" />);

    expect(wrapper.exists(".large")).toEqual(true);
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Button onClick={() => {}} fluid />);

    expect(wrapper.exists(".fluid")).toEqual(true);
  });

  it("should have className round when given round prop", () => {
    const wrapper = shallow(<Button onClick={() => {}} round />);

    expect(wrapper.exists(".round")).toEqual(true);
  });

  it("should have icon component when given icon prop", () => {
    const wrapper = mount(<Button onClick={() => {}} icon="heart" />);
    expect(wrapper.exists(".icon-heart")).toEqual(true);
  });
});
