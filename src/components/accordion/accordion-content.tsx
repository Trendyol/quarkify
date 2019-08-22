import classNames from "classnames";
import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import IDiv from "../../interfaces/div";
import "../../styles/components/_accordion.scss";
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
  onChange?: () => void;
  className?: string;
  expanded?: boolean;
}
