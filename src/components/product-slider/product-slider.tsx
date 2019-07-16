import React, { FunctionComponent } from "react";
import "../../styles/components/_product-slider.scss";

const ProductSlider: FunctionComponent<IProductSliderProps> = ({children}) => {
  return(
    <div className="q-product-slider-wrapper">
      <div className="q-product-slider">
        {React.Children.map(children, (child) => (
          <div className="q-item">
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
