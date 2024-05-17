import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";
import SubHeader from "../subheader";

Enzyme.configure({ adapter: new Adapter() });

describe("subheader specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render subheader component", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<SubHeader title={text} />);

    expect(wrapper).toHaveLength(1);
  });

  it("should render leftIcon", () => {
    const text = faker.lorem.word();
    const wrapper = mount(<SubHeader leftIcon="close" title={text} />);

    expect(wrapper.find(".icon-close")).toHaveLength(1);
  });

  it("should render rightIcon", () => {
    const text = faker.lorem.word();
    const wrapper = mount(<SubHeader rightIcon="close" title={text} />);

    expect(wrapper.find(".icon-close")).toHaveLength(1);
  });

  it("should call leftIconOnClick function ", () => {
    const spy = sandbox.spy();
    const text = faker.lorem.word();
    const wrapper = mount(<SubHeader title={text} leftIcon={"close"} leftIconOnClick={spy} />);

    wrapper.find(".icon-close").simulate("click");

    expect(spy.calledOnce).toBe(true);
  });

  it("should call rightIconOnClick function ", () => {
    const spy = sandbox.spy();
    const text = faker.lorem.word();
    const wrapper = mount(<SubHeader title={text} rightIcon={"close"} rightIconOnClick={spy} />);

    wrapper.find(".icon-close").simulate("click");

    expect(spy.calledOnce).toBe(true);
  });

  it("should render a title", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<SubHeader title={text} />);

    expect(wrapper.find(".title")).toHaveLength(1);
  });

  it("should render a subtitle", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<SubHeader title={text} subTitle={text} />);

    expect(wrapper.find(".title-group")).toHaveLength(1);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<SubHeader title={fakeClass} className={fakeClass} />);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

  it("should render left icon with the size that is given as leftIconSize", () => {
    const text = faker.lorem.word();
    const iconSize = "medium";
    const wrapper = mount(<SubHeader title={text} leftIcon={"close"} leftIconSize={iconSize} />);
    expect(wrapper.find(`.q-icon-${iconSize}`)).toHaveLength(1);
  });

  it("should render right icon with the size that is given as rightIconSize", () => {
    const text = faker.lorem.word();
    const iconSize = "large";
    const wrapper = mount(<SubHeader title={text} rightIcon={"close"} rightIconSize={iconSize} />);
    expect(wrapper.find(`.q-icon-${iconSize}`)).toHaveLength(1);
  });

  it("should take given tag for title", () => {
    const text = faker.lorem.word();
    const wrapper = mount(<SubHeader title={text} titleComponent={"h1"} />);
    expect(wrapper.find("h1.q-typography")).toHaveLength(1);
  });
});
