import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import ProductSlider from "../components/product-slider";

const stories = storiesOf("Product Slider", module);

const products = [
  {
    brand: faker.company.companyName(),
    src: "https://source.unsplash.com/random/150x250?fashion",
  },
];

for (let i = 0; i < 10; i++) {
  products.push({
    brand: faker.company.companyName(),
    src: "https://source.unsplash.com/random/150x250?fashion",
  });
}

stories.add("Default", () => (
  <div>
    <h1>Benzer Urunler</h1>
    <ProductSlider>
      {products.map((product, key) => (
        <div key={key}>
          <img src={product.src}/>
          <p>{product.brand}</p>
        </div>
      ))}
    </ProductSlider>
    <h4>{faker.lorem.lines(10)}</h4>
  </div>
));
