import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import ProductSlider from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("product-slider specs", () => {
  it("should render product slider correctly", () => {
    const wrapper = shallow(<ProductSlider/>);

    expect(wrapper.find(".product-slider")).toHaveLength(1);
  });

  it("should give every child a item className", () => {
    const numberOfChildren = faker.random.number(10);
    const wrapper = shallow(
      <ProductSlider>
        {Array.from({length: numberOfChildren}, (_, key) => (<div key={key}/>))}
      </ProductSlider>,
    );

    expect(wrapper.find(".item")).toHaveLength(numberOfChildren);
  });
});