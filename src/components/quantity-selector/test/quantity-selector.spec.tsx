import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import QuantitySelector from "../quantity-selector";

Enzyme.configure({ adapter: new Adapter() });

describe("quantity selector specs", () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.verifyAndRestore();
    });

    it("should render trash and plus icon when initial count is 1", () => {
        const count = 1;
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = mount(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={count}
        />);

        expect(wrapper.find(".q-qs-middle").text()).toEqual(count.toString());
        expect(wrapper.exists(".icon-trash")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should render minus and plus icon when initial count is higher then 1", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();
        const wrapper = mount(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={2}
        />);

        expect(wrapper.exists(".icon-minus")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should render Button component when initial count is 0", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = mount(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={0}
        />);

        expect(wrapper.exists(".icon-minus")).toEqual(false);
        expect(wrapper.exists(".icon-plus")).toEqual(false);
        expect(wrapper.exists("Button")).toEqual(true);
    });

    it("should render Button component when initial count is not specified", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = mount(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
        />);

        expect(wrapper.exists(".icon-minus")).toEqual(false);
        expect(wrapper.exists(".icon-plus")).toEqual(false);
        expect(wrapper.exists("Button")).toEqual(true);
    });

    it("should call decrement callback function when minus icon clicked", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = shallow(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={2}
        />);

        wrapper.find(".icon-minus").simulate("click");
        expect(spyDec.calledOnce).toEqual(true);
    });

    it("should call increment callback function when plus icon clicked", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = shallow(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={2}
        />);

        wrapper.find(".icon-plus").simulate("click");
        expect(spyInc.calledOnce).toEqual(true);
    });

    it("should call decrement callback function when trash icon clicked", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = shallow(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={1}
        />);

        wrapper.find(".icon-trash").simulate("click");
        expect(spyDec.calledOnce).toEqual(true);
    });

    it("should call increment callback function when button clicked", () => {
        const spyInc = sandbox.spy();
        const spyDec = sandbox.spy();

        const wrapper = shallow(<QuantitySelector
            onIncrementClick={spyInc}
            onDecrementClick={spyDec}
            buttonText="Sepete Ekle"
            count={0}
        />);

        wrapper.find("Button").simulate("click");
        expect(spyInc.calledOnce).toEqual(true);
        expect(spyDec.calledOnce).toEqual(false);
    });
});
