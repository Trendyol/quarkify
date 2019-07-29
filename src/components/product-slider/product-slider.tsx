import classNames from "classnames";
import React, { PureComponent } from "react";
import "../../styles/components/_product-slider.scss";

export default class ProductSlider extends PureComponent<IProductSliderProps> {
  public render() {
    const { className } = this.props;
    const productSliderClasses = classNames(
      "q-product-slider",
      className,
    );
    return (
      <div className={productSliderClasses}>
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
  className?: string;
}
