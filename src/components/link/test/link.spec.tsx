import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Link from "../link";

Enzyme.configure({ adapter: new Adapter() });

const onClick = () => {
  alert("test");
};

describe("link specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render link component", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Link to={"https://google.com"}>{text}</Link>);

    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should go to google when clicked", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Link to={"https://google.com"}>{text}</Link>);

    expect(wrapper.find("a").prop("href")).toEqual("https://google.com");
  });

  it("should be rendered with given primary variant prop", () => {
    const wrapper = shallow(<Link to={"google.com"} variant="primary"/>);

    expect(wrapper.exists(".q-primary")).toEqual(true);
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Link to={"google.com"} fluid/>);

    expect(wrapper.exists(".q-fluid")).toEqual(true);
  });

  it("should have className round when given round prop", () => {
    const wrapper = shallow(<Link to={"google.com"} round/>);

    expect(wrapper.exists(".q-round")).toEqual(true);
  });

  it("should have icon component when given icon prop", () => {
    const wrapper = mount(<Link to={"google.com"} icon="heart"/>);
    expect(wrapper.exists(".icon-heart")).toBe(true);
  });

  it("should have className circular when given circular prop", () => {
    const wrapper = shallow(<Link to={"google.com"} circular/>);

    expect(wrapper.exists(".q-circular")).toBe(true);
  });

  it("should have className disabled when given disabled prop", () => {
    const wrapper = shallow(<Link to={"google.com"} disabled circular/>);

    expect(wrapper.exists(".q-anchor-disabled")).toBe(true);
  });
});
