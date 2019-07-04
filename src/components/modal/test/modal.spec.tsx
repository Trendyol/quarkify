import Enzyme, { mount } from "enzyme";
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
    const wrapper = mount(<Modal show={true} />);
    expect(wrapper.exists(".modal-main")).toEqual(true);
  });

  it("should not render modal component", () => {
    const wrapper = mount(<Modal show={false} />);
    expect(wrapper.exists(".modal-main")).toEqual(false);
  });

  it("should render header sub component", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header />
      </Modal>,
    );
    expect(wrapper.find(".modal-header")).toHaveLength(1);
  });

  it("should render content sub component", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Content />
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

  it("should have close icon button by default", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header />
      </Modal>,
    );
    expect(wrapper.find(".icon-close")).toHaveLength(1);
  });

  it("should not have icon button if noIcon prop is passed", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header noIcon />
      </Modal>,
    );
    expect(wrapper.find(".icon-close")).toHaveLength(0);
  });

  it("should call onClose when icon is clicked", () => {
    const onClose = sandbox.spy();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header onClose={onClose} />
      </Modal>,
    );
    wrapper.find("i").simulate("click");
    expect(onClose.calledOnce).toEqual(true);
  });
});
