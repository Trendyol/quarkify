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
    const wrapper = shallow(<Button onClick={onClick} variant="primary" />);

    expect(wrapper.exists(".primary")).toEqual(true);
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Button onClick={onClick} fluid />);

    expect(wrapper.exists(".fluid")).toEqual(true);
  });

  it("should have className round when given round prop", () => {
    const wrapper = shallow(<Button onClick={onClick} round />);

    expect(wrapper.exists(".round")).toEqual(true);
  });

  it("should have icon component when given icon prop", () => {
    const wrapper = mount(<Button onClick={onClick} icon="heart" />);
    expect(wrapper.exists(".icon-heart")).toBe(true);
  });

  it("should have className circular when given circular prop", () => {
    const wrapper = shallow(<Button circular />);

    expect(wrapper.exists(".circular")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Button className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
