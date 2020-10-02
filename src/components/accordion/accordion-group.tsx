import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";

export default class AccordionGroup extends PureComponent<IAccordionGroupProps> {
  public render() {
    const {
      children,
      className,
      ...props
    } = this.props;
    const accordionGroupClasses = classNames(
      "q-accordion-group",
      className,
    );
    return (
      <div className={accordionGroupClasses} {...props}>
        {children}
      </div>
    );
  }
}

// tslint:disable-next-line:no-empty-interface
interface IAccordionGroupProps extends IDiv {
}
