import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_product-slider.scss";

export default class ProductSlider extends PureComponent<IProductSliderProps> {
  public render() {
    const { children, className, ...props } = this.props;
    const productSliderClasses = classNames(
      "q-product-slider",
      className,
    );
    return (
      <div className={productSliderClasses} {...props}>
        {React.Children.map(children, (child) => (
          <div className="q-item">
            {child}
          </div>
        ))}
      </div>
    );
  }
}

interface IProductSliderProps extends IDiv {
  className?: string;
}
