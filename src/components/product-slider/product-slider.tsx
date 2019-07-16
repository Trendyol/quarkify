import React, { PureComponent } from "react";
import "../../styles/components/_product-slider.scss";

class ProductSlider extends PureComponent<IProductSliderProps> {
  public render() {
    return(
      <div className="q-product-slider">
        {React.Children.map(this.props.children, (child) => (
          <div className="q-item">
            {child}
          </div>
        ))}
      </div>
    );
  }
}

interface IProductSliderProps {
  children?: any;
}

export default ProductSlider;
