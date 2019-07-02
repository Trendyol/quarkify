import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Modal from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("modal specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render modal component", () => {
    const wrapper = shallow(<Modal show={true} />);
    expect(wrapper.exists(".modal-main")).toEqual(true);
  });

  it("should not render modal component", () => {
    const wrapper = shallow(<Modal show={false} />);
    expect(wrapper.exists(".modal-main")).toEqual(false);
  });

  it("should render title sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Title>
          <h1>{text}</h1>
        </Modal.Title>
      </Modal>,
    );
    expect(wrapper.find(".modal-title")).toHaveLength(1);
  });

  it("should render content sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Content>
          <p>{text}</p>
        </Modal.Content>
      </Modal>,
    );
    expect(wrapper.find(".modal-content")).toHaveLength(1);
  });

  it("should render actions sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Actions>
          <button>{text}</button>
        </Modal.Actions>
      </Modal>,
    );
    expect(wrapper.find(".modal-actions")).toHaveLength(1);
  });

  it("should have close icon button", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Title>
          <h1>{text}</h1>
        </Modal.Title>
      </Modal>,
    );
    expect(wrapper.find(".icon-close")).toHaveLength(1);
  });

  it("should have back icon button", () => {
    const wrapper = mount(<Modal show={true} icon="back"/>);

    expect(wrapper.find(".icon-back")).toHaveLength(1);
  });

  it("should render the icon on left if the iconPosition prop is given left", () => {
    const wrapper = shallow(<Modal show={true} iconPosition="left"/>);

    expect(wrapper.find(".modal-icon-left")).toHaveLength(1);
  });

});