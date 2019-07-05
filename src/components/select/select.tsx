import React from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";

class Select extends React.PureComponent<IProps> {
  public render() {
    const { items, variant, fluid, subtext, ...props } = this.props;
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
                    value={item.value}
                    disabled={item.disabled}
                    className={classNamesDefault({ variant: item.variant })}
                  >
                    {item.name}
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
}

export default Select;
