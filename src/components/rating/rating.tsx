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

  private defaultMargin: number = 3;
  private defaultStars: number = 5;

  public calculateWidth(score: number, size: string, margin: number, stars: number) {
    const plus = (Math.ceil(score) - 1) * margin;
    return (score * this.defaultSizeMapping[size] + plus) * 100 /
      (stars * this.defaultSizeMapping[size] + margin * (stars - 1));
  }

  public render() {
    const {
      value = 0,
      icon = "star",
      size = "medium",
      color = "yellow",
      disabled,
      children, className, margin = this.defaultMargin, stars = this.defaultStars, ...props } = this.props;
    const ratingClasses = classNames(
      classNamesDefault({ disabled }),
      "q-rating",
      size && `q-rating-${size}`,
      className,
    );

    return (
      <div className={ratingClasses} {...props}>
        <div className="q-rating-empty">
          {Array.from({ length: stars }, (_, i) =>
            <Icon key={i} style={{ marginRight: `${i + 1 === stars ? 0 : margin}px` }} name={icon}/>,
            )}
        </div>
        <div style={{width: `${this.calculateWidth(value, size, margin, stars)}%`}} className="q-rating-full">
          {Array.from({ length: stars }, (_, i) =>
            <Icon key={i} style={{ marginRight: `${i + 1 === stars ? 0 : margin}px` }} name={icon} color={color}/>,
            )}
        </div>
      </div>
    );
  }
}

interface IProps extends IDiv {
  value?: number;
  icon?: string;
  size?: ratingSize;
  disabled?: boolean;
  color?: colorTypes;
  className?: string;
  margin?: number;
  stars?: number;
}
