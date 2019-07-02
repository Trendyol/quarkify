import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Icon from "../icon"
import faker from "faker";
import sinon from "sinon";
import Popup from "../../popup";


Enzyme.configure({ adapter: new Adapter() });

describe("icon specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render icon component", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<Icon name={text}/>);
    expect(wrapper.find(".icon-" + text)).toHaveLength(1);
  });

  it("should be rendered with given large size prop", () => {
    const wrapper = shallow(<Icon name="search" size="large" />);

    expect(wrapper.exists(".large")).toEqual(true);
  });

  it("should close popup when close icon is clicked", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Popup onClose={spy} show={true} />);
    wrapper.find(".icon-close").simulate("click");
    expect(spy.calledOnce).toEqual(true);
  });


});
