import classNames from "classnames";
import React, { PureComponent } from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { colorTypes } from "../../types/color";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

export default class Select extends PureComponent<IProps> {
  public render() {
    const {
      items,
      variant,
      fluid,
      name,
      value,
      leftIcon,
      rightIcon,
      rightIconColor,
      leftIconColor,
      className,
      disabled,
      error,
      ...props
    } = this.props;
    const nameKey = this.props.name === undefined ? "name" : this.props.name;
    const valueKey =
      this.props.value === undefined ? "value" : this.props.value;
    const selectDivClasses = classNames(
      "q-select-wrapper",
      classNamesDefault({ fluid, disabled }),
      className,
      error && "q-error",
    );
    const selectClasses = classNames(
      "q-select",
      !leftIcon && "select-left-padding",
      !rightIcon && "select-right-padding",
    );
    return (
      <div className={selectDivClasses}>
        {leftIcon && <Icon className={"q-select-icon-left"} name={leftIcon} color={leftIconColor}/>}
        <select className={selectClasses} disabled={disabled} {...props}>
          {this.props.items.map((item, index) => {
            return (
              <option
                selected={item.selected}
                key={index}
                value={item[valueKey]}
                disabled={item.disabled}
                className={classNamesDefault({ variant: item.variant })}
              >
                {item[nameKey]}
              </option>
            );
          })}
        </select>
        {rightIcon && <Icon className={"q-select-icon-right"} name={rightIcon} color={rightIconColor}/>}
      </div>
    );
  }
}

interface IProps extends ISelect {
  variant?: variantTypes;
  items: any[];
  fluid?: boolean;
  value?: string;
  name?: string;
  error?: boolean;
  rightIcon?: string;
  leftIcon?: string;
  className?: string;
  rightIconColor?: colorTypes;
  leftIconColor?: colorTypes;
}
