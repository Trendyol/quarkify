import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Accordion from "../accordion";

Enzyme.configure({ adapter: new Adapter() });

describe("accordion specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render correctly", () => {
    const text = faker.random.word();
    const wrapper = shallow(
      <Accordion>
        <Accordion.Header>
          {text}
        </Accordion.Header>
        <Accordion.Content>
          {text}
        </Accordion.Content>
      </Accordion>);

    expect(wrapper.find(".q-accordion")).toHaveLength(1);
  });

  it("should expand and show the contents when clicked", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Accordion>
        <Accordion.Header>
          {text}
        </Accordion.Header>
        <Accordion.Content>
          {text}
        </Accordion.Content>
      </Accordion>);
    const accordionHeader = wrapper.find(".q-accordion-header");

    accordionHeader.simulate("click");

    expect(wrapper.find("Content").prop("expanded")).toBe(true);
  });

  it("should call the onChange function passed as prop when header is clicked", () => {
    const onChangeSpy = sandbox.spy();
    const wrapper = mount(
      <Accordion onChange={onChangeSpy}>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);
    const accordionHeader = wrapper.find(".q-accordion-header");

    accordionHeader.simulate("click");

    expect(onChangeSpy.calledOnce).toBe(true);
  });

  it("should use the expanded prop as the state if it is passed", () => {
    const wrapper = mount(
      <Accordion expanded={true}>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);

    expect(wrapper.state("expanded")).toBe(true);
  });

  it("should update the expanded state if expanded prop is changed", () => {
    const wrapper = shallow(
      <Accordion expanded={false}>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);

    wrapper.setProps({ expanded: true });

    expect(wrapper.state("expanded")).toBe(true);
  });

  it("should call onChange if expanded or shrunk", () => {
    const onChangeSpy = sandbox.spy();
    const wrapper = shallow(
      <Accordion onChange={onChangeSpy}>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);

    wrapper.setState({ expanded: true });

    expect(onChangeSpy.calledOnce).toBe(true);
  });

  it("should not change expanded state if expanded prop is not given and component receives another prop", () => {
    const wrapper = mount(
      <Accordion>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);
    const oldExpandedState = wrapper.state("expanded");

    wrapper.setProps({ className: faker.lorem.word() });

    expect(wrapper.state("expanded")).toBe(oldExpandedState);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = mount(
      <Accordion className={fakeClass}>
        <Accordion.Header/>
        <Accordion.Content/>
      </Accordion>);
    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
