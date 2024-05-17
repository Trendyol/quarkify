import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React, { act } from "react";
import sinon from "sinon";
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

  it("should remove overflow property when bottom-sheet is closed", () => {
    const wrapper = shallow(<BottomSheet show={true} onClose={handleChange} />);

    const body = (global as any).window.document.querySelector("body");
    expect(body.style.overflow).toEqual("hidden");
    wrapper.setProps({ show: false });
    expect(body.style.overflow).toEqual("");
  });

  it("should remove overflow property when bottom-sheet is opened", () => {
    const wrapper = shallow(<BottomSheet show={false} onClose={handleChange} />);

    const body = (global as any).window.document.querySelector("body");
    expect(body.style.overflow).toEqual("");
    wrapper.setProps({ show: true });
    expect(body.style.overflow).toEqual("hidden");
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
    
    const spy = vi.spyOn(wrapper.instance(), "componentDidUpdate");

    act(() => {
      wrapper.instance().forceUpdate();
    });

    act(() => {
      wrapper.find(".q-bottom-sheet-main").simulate("touchmove");
    });

    expect(spy).toHaveBeenCalled();
  });
});
