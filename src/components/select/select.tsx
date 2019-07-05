import React from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";

class Select extends React.PureComponent<IProps, {}> {
  public render() {
    const {
      items,
      variant,
      fluid,
      subtext,
      name,
      value,
      ...props
    } = this.props;
    const nameKey = this.props.name === undefined ? "name" : this.props.name;
    const valueKey =
      this.props.value === undefined ? "value" : this.props.value;
    return (
      <div style={{ position: "relative" }}>
        <div className={`select-wrapper ${fluid ? "fluid" : ""}`}>
          <div className={"select-group"}>
            <select className="select" {...props}>
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
}

export default Select;
