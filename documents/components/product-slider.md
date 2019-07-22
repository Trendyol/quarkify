# Product Slider

Product Slider is a wrapper component in which it makes the children
component it wraps slide horizontally.

```html
  <div>
    <h1>Similar Products</h1>
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
```
