import React  from "react";
import EmbeddedGist from "../partials/EmbeddedGist"
import { Box } from "quarkify/components/box";
import QProductSlider  from "quarkify/components/product-slider";
import faker from "faker";

const products = [];

for (let i = 0; i < 10; i++) {
  products.push({
    brand: faker.company.companyName(),
    src: "https://picsum.photos/150/250",
  });
}

function ProductSlider() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Product Slider</h2>
        <div className="section-block">
          <p>Product Slider is a wrapper component in which it makes the children component it wraps slide horizontally.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>As it can be seen, Product Slider takes some elements as children and renders these elements horizontally allows users to scroll in x direction.</p>
          <Box>
            <QProductSlider>
              {products.map((product, key) => (
                <div key={key}>
                  <img src={product.src}/>
                  <p>{product.brand}</p>
                </div>
              ))}
            </QProductSlider>
          </Box>
          <EmbeddedGist gist="yavuzkoca/24e5fbea9eb3be24c926d9254fa7f056" file="product-slider_1.jsx"/>
        </div>

      </section>
    </>
  );
}

export default ProductSlider;
