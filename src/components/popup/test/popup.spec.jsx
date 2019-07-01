import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import sinon from "sinon";
import Popup from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("popup specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render popup component", () => {
    const wrapper = shallow(<Popup show={true} />);
    expect(wrapper.exists(".popup-overlay")).toEqual(true);
  });

  it("should not render popup component", () => {
    const wrapper = shallow(<Popup show={false} />);
    expect(wrapper.exists(".popup-overlay")).toEqual(false);
  });

  it("should render title sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Popup show={true}>
        <Popup.Title>
          <h1>{text}</h1>
        </Popup.Title>
      </Popup>
    );
    expect(wrapper.childAt(0).exists(".popup-title")).toEqual(true)
  });

  it("should render content sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Popup show={true}>
        <Popup.Title>
          <h1>{text}</h1>
        </Popup.Title>
        <Popup.Content>
          <p>{text}</p>
        </Popup.Content>
      </Popup>
    );
    expect(wrapper.childAt(0).exists(".popup-content")).toEqual(true)
  });

  it("should render actions sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Popup show={true}>
        <Popup.Title>
          <h1>{text}</h1>
        </Popup.Title>
        <Popup.Content>
          <p>{text}</p>
        </Popup.Content>
        <Popup.Actions>
          <button>{text}</button>
        </Popup.Actions>
      </Popup>
    );
    expect(wrapper.childAt(0).exists(".popup-actions")).toEqual(true)
  });

  it('should have close icon button', () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Popup show={true}>
        <Popup.Title>
          <h1>{text}</h1>
        </Popup.Title>
      </Popup>
    );
    expect(wrapper.childAt(0).exists(".icon-close")).toEqual(true)
  });



});
