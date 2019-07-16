import React, { FunctionComponent } from "react";
import "../../styles/components/_product-slider.scss";

const ProductSlider: FunctionComponent<IProductSliderProps> = ({children}) => {
  return(
    <div className="product-slider-wrapper">
      <div className="product-slider">
        {React.Children.map(children, (child) => (
          <div className="item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

interface IProductSliderProps {
  children?: any;
}

export default ProductSlider;
