import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import sinon, { SinonSpy } from "sinon";
import QuantitySelector from "../quantity-selector";

Enzyme.configure({ adapter: new Adapter() });

describe("quantity selector specs", () => {
    const sandbox = sinon.createSandbox();
    let spyInc: SinonSpy;
    let spyDec: SinonSpy;

    beforeEach(() => {
        spyInc = sandbox.spy();
        spyDec = sandbox.spy();
    });

    afterEach(() => {
        sandbox.verifyAndRestore();
    });

    it("should render trash and plus icon when initial count is 1", () => {
        const count = 1;
        const wrapper = mount(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={count}
        />);

        expect(wrapper.find(".q-qs-middle").text()).toEqual(count.toString());
        expect(wrapper.exists(".icon-trash")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should render minus and plus icon when initial count is higher then 1", () => {
        const wrapper = mount(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={2}
        />);

        expect(wrapper.exists(".icon-minus")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should render disabled decrement icon when initial count is 0", () => {
        const wrapper = mount(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={0}
        />);

        expect(wrapper.find(".icon-minus").first().props().disabled).toEqual(true);
        expect(wrapper.exists(".icon-minus")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should render disabled decrement icon when initial count is not specified", () => {
        const wrapper = mount(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
        />);

        expect(wrapper.find(".icon-minus").first().props().disabled).toEqual(true);
        expect(wrapper.exists(".icon-minus")).toEqual(true);
        expect(wrapper.exists(".icon-plus")).toEqual(true);
    });

    it("should call decrement callback function when minus icon clicked", () => {
        const wrapper = shallow(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={2}
        />);

        wrapper.find(".icon-minus").simulate("click");
        expect(spyDec.calledOnce).toEqual(true);
    });

    it("should call increment callback function when plus icon clicked", () => {
        const wrapper = shallow(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={2}
        />);

        wrapper.find(".icon-plus").simulate("click");
        expect(spyInc.calledOnce).toEqual(true);
    });

    it("should call decrement callback function when trash icon clicked", () => {
        const wrapper = shallow(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            count={1}
        />);

        wrapper.find(".icon-trash").simulate("click");
        expect(spyDec.calledOnce).toEqual(true);
    });

    it("should have className fluid when given fluid prop", () => {
        const wrapper = shallow(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            fluid={true}
            count={1}
        />);

        expect(wrapper.exists(".q-fluid")).toEqual(true);
    });

    it("should apply given size prop", () => {
        const size = "small";
        const wrapper = shallow(<QuantitySelector
            onIncrement={spyInc}
            onDecrement={spyDec}
            size={size}
            count={1}
        />);

        expect(wrapper.exists(".q-small")).toEqual(true);
    });
});
