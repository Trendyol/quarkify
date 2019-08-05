import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon, { SinonStub } from "sinon";
import withRipple from "../index";

Enzyme.configure({ adapter: new Adapter() });

const createMockDiv = (width: number, height: number) => {
  const div = document.createElement("div");
  Object.assign(div.style, {
    height: height + "px",
    width: width + "px",
  });

  div.getBoundingClientRect = () => ({
    height,
    width,
    // tslint:disable-next-line:object-literal-sort-keys
    left: 0,
    right: width,
    bottom: height,
    top: 0,
  });
  return div;
};

class Component extends React.Component {
  public render() {
    return <div>{faker.random.word()}</div>;
  }
}

describe("withRipple specs", () => {

  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render the component as is if ripple prop is false", () => {
    const RippleComponent = withRipple(Component);
    const wrapper = shallow(<RippleComponent ripple={false}/>);

    expect(wrapper.find(".q-ripple")).toHaveLength(0);
  });

  it("should show the ripple when clicked", () => {
    const RippleComponent = withRipple(Component);
    const wrapper = shallow(<RippleComponent/>);

    wrapper.find(".q-ripple").simulate(
      "click",
      {currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      });

    expect(wrapper.find(".ripple")).toHaveLength(1);
  });

  it("should remove the ripple when animation ends", () => {
    const RippleComponent = withRipple(Component);
    const stub = sandbox.stub();
    const wrapper = shallow(<RippleComponent onClick={stub}/>);

    wrapper.find(".q-ripple").simulate(
      "click",
      {currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      });

    wrapper.find(".ripple").simulate("animationEnd");

    expect(wrapper.find(".ripple")).toHaveLength(0);
  });

  it("should call the onClick of the wrapped element", () => {
    const RippleComponent = withRipple(Component);
    const stub = sandbox.stub();
    const wrapper = shallow(<RippleComponent onClick={stub}/>);

    wrapper.find(".q-ripple").simulate(
      "click",
      {currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      });

    expect(stub.called).toBe(true);
  });
});
