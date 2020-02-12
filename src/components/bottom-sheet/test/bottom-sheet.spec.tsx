import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Popup from "../../popup";
import BottomSheet from "../bottom-sheet";

Enzyme.configure({ adapter: new Adapter() });

function handleChange() {
  return null;
}

describe("bottom sheet specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render bottom-sheet component", () => {
    const wrapper = shallow(<BottomSheet show={true} onClose={handleChange}/>);
    expect(wrapper.exists(".q-bottom-sheet-main")).toEqual(true);
  });

  it("should not render bottom-sheet component", () => {
    const wrapper = mount(<BottomSheet show={false} onClose={handleChange}/>);
    expect(wrapper.exists(".q-bottom-sheet-main")).toEqual(false);
  });

  it("should render bottom-sheet component", () => {
    const wrapper = shallow(<BottomSheet show={true} onClose={handleChange}/>);
    expect(wrapper.exists(".q-bottom-sheet-main")).toEqual(true);
  });

  it("should add disable-scroll class when bottom-sheet is shown", () => {
    const wrapper = shallow(<BottomSheet show={false} onClose={handleChange} />);
    wrapper.setProps({ show: true });

    expect(document.body.classList.contains("q-disable-scroll")).toBe(true);
  });

  it("should remove disable-scroll class when bottom-sheet is hidden", () => {
    const wrapper = shallow(<BottomSheet show={true} onClose={handleChange} />);
    wrapper.setProps({ show: false });

    expect(document.body.classList.contains("q-disable-scroll")).toBe(false);
  });

  it("should call onChange when overlay is clicked", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(<BottomSheet onClose={onChange} show={true}/>);
    wrapper.find(".q-bottom-sheet-overlay").simulate("click");
    expect(onChange.calledOnce).toEqual(true);
  });

  it("should not call onChange when bottom sheet content is clicked", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(
      <BottomSheet onClose={onChange} show={true} />,
    );
    const event = { stopPropagation: () => null };
    wrapper.find(".q-bottom-sheet-main").simulate("click", event);
    expect(onChange.calledOnce).toEqual(false);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const onChange = sandbox.spy();
    const wrapper = mount(<BottomSheet show={false} onClose={onChange} className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

  it("should fire touchmove event", () => {
    const wrapper = mount(
      <BottomSheet onClose={handleChange} show={true} />,
    );
    const spy = jest.spyOn(wrapper.instance(), "componentDidUpdate");
    wrapper.instance().forceUpdate();
    wrapper.find(".q-bottom-sheet-main").simulate("touchmove");
    expect(spy).toHaveBeenCalled();
  });
});
