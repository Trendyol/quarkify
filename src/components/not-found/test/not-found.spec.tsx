import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import NotFound from "../not-found";

Enzyme.configure({ adapter: new Adapter() });

describe("NotFound specs", () => {
  it("should render with given props", () => {
    const title = faker.random.word();
    const subtitle = faker.random.word();
    const buttonText = faker.random.word();
    const wrapper = shallow(
      <NotFound
        iconSize="large"
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        iconColor="light-gray"
      />);

    expect(wrapper.find(".q-not-found")).toHaveLength(1);
    expect(
      wrapper
        .find(".q-not-found__title")
        .childAt(0)
        .text()).toBe(title);
    expect(
      wrapper
        .find(".q-not-found__subtitle")
        .childAt(0)
        .text()).toBe(subtitle);
    expect(
      wrapper
        .find(".q-not-found__button")
        .childAt(0)
        .text()).toBe(buttonText);
  });

  it("should render default layout when props are not provided", () => {
    const wrapper = shallow(<NotFound iconColor="light-gray" />);

    expect(wrapper.find(".q-not-found")).toHaveLength(1);
    expect(wrapper.find(".q-not-found__icon")).toHaveLength(1);
    expect(wrapper.find(".q-not-found__title")).toHaveLength(0);
    expect(wrapper.find(".q-not-found__subtitle")).toHaveLength(0);
    expect(
      wrapper
        .find(".q-not-found__button")
        .childAt(0)
        .text()).toBe("Alışverişe Devam Et");
  });

  it("should render given amount of spans as children to the Icon component", () => {
    const spanCount = faker.random.number({ max: 10 });
    const wrapper = mount(<NotFound stroke={spanCount} />);

    expect(wrapper.find(".q-not-found__icon > span")).toHaveLength(spanCount);
  });
});
