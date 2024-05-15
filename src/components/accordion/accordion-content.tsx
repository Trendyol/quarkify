import classNames from "classnames";
import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import IDiv from "../../interfaces/div";
import { animationTypes } from "../../types/modal";

export default class Content extends PureComponent<IAccordionContentProps> {

  public render() {
    const { expanded, className, children } = this.props;
    const accordionContentClasses = classNames("q-accordion-content", className);
    return (
      <CSSTransition
        in={expanded}
        unmountOnExit
        timeout={300}
        classNames="q-slideInDown q-accordion"
      >
        <div className={accordionContentClasses}>{children}</div>
      </CSSTransition>
    );
  }
}

interface IAccordionContentProps extends IDiv {
  animation?: animationTypes;
  className?: string;
  expanded?: boolean;
  children?: React.ReactNode;
  onChange?: () => void;
}
