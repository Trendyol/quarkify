import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_rating.scss";
import { colorTypes } from "../../types/color";
import { ratingSize } from "../../types/rating";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

export default class Rating extends PureComponent<IProps> {

  public defaultSizeMapping: any = {
    large: 18,
    medium: 14,
    small: 10,
  };

  public calculateWidth(score: number, size: string) {
    const plus = (Math.ceil(score) - 1) * 3;
    return (score * this.defaultSizeMapping[size] + plus) * 100 /
      (5 * this.defaultSizeMapping[size] + 3 * 4);
  }

  public render() {
    const { value, icon = "star", size = "medium", color, disabled, children, className, ...props } = this.props;
    const ratingClasses = classNames(
      classNamesDefault({ disabled }),
      "q-rating",
      size && `q-rating-${size}`,
      className,
    );

    return (
      <div className={ratingClasses} {...props}>
        <div className="q-rating-empty">
          <Icon name={icon}/>
          <Icon name={icon}/>
          <Icon name={icon}/>
          <Icon name={icon}/>
          <Icon name={icon}/>
        </div>
        <div style={{width: `${this.calculateWidth(value, size)}%`}} className="q-rating-full">
          <Icon name={icon} color="yellow"/>
          <Icon name={icon} color="yellow"/>
          <Icon name={icon} color="yellow"/>
          <Icon name={icon} color="yellow"/>
          <Icon name={icon} color="yellow"/>
        </div>
      </div>
    );
  }
}

interface IProps extends IDiv {
  value: number;
  icon?: string;
  size?: ratingSize;
  disabled?: boolean;
  color?: colorTypes;
  className?: string;
}
