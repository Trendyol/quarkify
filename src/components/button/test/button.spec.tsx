import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Button from "../button";

Enzyme.configure({ adapter: new Adapter() });

const onClick = () => {
  alert("test");
};

describe("button specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render button component", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Button onClick={onClick}>{text}</Button>);

    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should call callback function when clicked", () => {
    const spy = sandbox.spy();
    const wrapper = shallow(<Button onClick={spy}/>);

    wrapper.find("button").simulate("click");

    expect(spy.calledOnce).toEqual(true);
  });

  it("should not call callback function when clicked but button is disabled", () => {
    const stub = sandbox.stub();
    const wrapper = mount(<Button onClick={stub} disabled/>);

    wrapper.find("button").simulate("click");

    expect(stub.called).toBe(false);
  });

  it("should be rendered with given primary variant prop", () => {
    const wrapper = shallow(<Button onClick={onClick} variant="primary"/>);

    expect(wrapper.exists(".q-primary")).toEqual(true);
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Button onClick={onClick} fluid/>);

    expect(wrapper.exists(".q-fluid")).toEqual(true);
  });

  it("should have className round when given round prop", () => {
    const wrapper = shallow(<Button onClick={onClick} round/>);

    expect(wrapper.exists(".q-round")).toEqual(true);
  });

  it("should have icon component when given icon prop", () => {
    const wrapper = mount(<Button onClick={onClick} icon="heart"/>);
    expect(wrapper.exists(".icon-heart")).toBe(true);
  });

  it("should have className circular when given circular prop", () => {
    const wrapper = shallow(<Button circular/>);

    expect(wrapper.exists(".q-circular")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Button className={fakeClass}/>);
    expect(wrapper.find("." + fakeClass)).toHaveLength(1);
  });

  it("should render Loader component when loading prop is passed", () => {
    const wrapper = mount(<Button loading={true}/>);

    expect(wrapper.find(".q-loader")).toHaveLength(1);
  });

  it("should be disabled when the button is loading", () => {
    const wrapper = shallow(<Button loading={true}/>);
    expect(wrapper.find("button[disabled]")).toHaveLength(1);
  });
});
