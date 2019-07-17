import classNames from "classnames";
import React, { PureComponent } from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

class Select extends PureComponent<IProps> {
  public render() {
    const {
      items,
      variant,
      fluid,
      subtext,
      name,
      value,
      leftIcon,
      rightIcon,
      className,
      ...props
    } = this.props;
    const nameKey = this.props.name === undefined ? "name" : this.props.name;
    const valueKey =
      this.props.value === undefined ? "value" : this.props.value;
    const selectClasses = classNames(
      "q-select-wrapper",
      classNamesDefault({fluid}),
      className,
    );
    return (
      <div style={{ position: "relative" }}>
        <div className={selectClasses}>
          <div className={"q-select-group"}>
            {leftIcon && <Icon className={"q-select-icon-left"} name={leftIcon} />}
            <select className="q-select" {...props}>
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
            {rightIcon && <Icon className={"q-select-icon-right"} name={rightIcon} />}
          </div>
        </div>
      </div>
    );
  }
}

interface IProps extends ISelect {
  variant?: variantTypes;
  items: any[];
  subtext?: string;
  fluid?: boolean;
  value?: string;
  name?: string;
  rightIcon?: string;
  leftIcon?: string;
  className?: string;
}

export default Select;
