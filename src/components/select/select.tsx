import classNames from "classnames";
import React, { PureComponent } from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { variantTypes as iconVariantTypes } from "../../types/icon";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

class Select extends PureComponent<IProps> {
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
    const selectClasses = classNames(
      "q-select-wrapper",
      classNamesDefault({ fluid, disabled }),
      className,
      error && "q-error",
    );
    return (
      <div style={{ position: "relative" }}>
        <div className={selectClasses}>
          <div className={"q-select-group"}>
            {leftIcon && <Icon className={"q-select-icon-left"} name={leftIcon} variant={leftIconColor}/>}
            <select className="q-select" disabled={disabled} {...props}>
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
            {rightIcon && <Icon className={"q-select-icon-right"} name={rightIcon} variant={rightIconColor}/>}
          </div>
        </div>
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
  rightIconColor?: iconVariantTypes;
  leftIconColor?: iconVariantTypes;
}

export default Select;
