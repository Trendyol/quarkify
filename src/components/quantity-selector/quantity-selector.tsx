import classNames from "classnames";
import React, { PureComponent } from "react";
import { qsSize } from "../../types/quantity-selector";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import { IProps as IIconProps } from "../icon/icon";

export default class QuantitySelector extends PureComponent<IQuantitySelectorProps> {
  public render() {
    const { count, fluid, size = "medium" } = this.props;

    const qsClasses = classNames(
      classNamesDefault({ fluid }),
      size && `q-${size}`,
      "q-qs-main",
    );

    return (
      <div className={qsClasses}>
        <div className="q-qs-left">{this.renderDecrementIcon()}</div>
        <div className="q-qs-middle">{count || 0}</div>
        <div className="q-qs-right">{this.renderIncrementIcon()}</div>
      </div>
    );
  }

  private renderDecrementIcon() {
    const { onDecrement, count, iconProps } = this.props;
    const disabled = !count;
    const className = count === 1 ? "icon-trash" : "icon-minus";
    const name = count === 1 ? "trash" : "minus";

    return (
      <Icon
        {...iconProps}
        name={name}
        disabled={disabled}
        className={className}
        onClick={onDecrement}
      />
    );
  }

  private renderIncrementIcon() {
    const { onIncrement, iconProps } = this.props;

    return (
      <Icon
        {...iconProps}
        name="plus"
        className={"icon-plus"}
        onClick={onIncrement}
      />
    );
  }
}

interface IQuantitySelectorProps {
  onIncrement: () => void;
  onDecrement: () => void;
  count?: number;
  size?: qsSize;
  fluid?: boolean;
  iconProps?: IIconProps | any;
}
