import React, { FunctionComponent, PureComponent } from "react";
import "../../styles/components/_accordion.scss";
import { animationTypes } from "../../types/modal";
import Content from "./accordion-content";
import Header from "./accordion-header";

class Accordion extends React.Component<IAccordionProps> {
  public static Header = Header;
  public static Content = Content;
  public render() {
    const {
      className,
      children,
      ...props
    } = this.props;
    return(
      <div className="q-accordion">
        {children}
      </div>
    );
  }
}

interface IAccordionProps {
  animation?: animationTypes;
  className?: string;
}

export default Accordion;
