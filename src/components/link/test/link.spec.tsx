import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";
import Link from "../link";

Enzyme.configure({ adapter: new Adapter() });

describe("link specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render link component", () => {
    const text = faker.lorem.word();
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url}>{text}</Link>);

    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should have given href attribute", () => {
    const text = faker.lorem.word();
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url}>{text}</Link>);

    expect(wrapper.find("a").prop("href")).toEqual(url);
  });

  it("should be rendered with given primary variant prop", () => {
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url} variant="primary"/>);

    expect(wrapper.exists(".q-primary")).toEqual(true);
  });

  it("should have className fluid when given fluid prop", () => {
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url} fluid/>);

    expect(wrapper.exists(".q-fluid")).toEqual(true);
  });

  it("should have className round when given round prop", () => {
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url} round/>);

    expect(wrapper.exists(".q-round")).toEqual(true);
  });

  it("should have icon component when given icon prop", () => {
    const url = faker.lorem.word();
    const wrapper = mount(<Link to={url} icon="heart"/>);
    expect(wrapper.exists(".icon-heart")).toBe(true);
  });

  it("should have className circular when given circular prop", () => {
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url} circular/>);

    expect(wrapper.exists(".q-circular")).toBe(true);
  });

  it("should have className disabled when given disabled prop", () => {
    const url = faker.lorem.word();
    const wrapper = shallow(<Link to={url} disabled circular/>);

    expect(wrapper.exists(".q-anchor-disabled")).toBe(true);
  });
});
