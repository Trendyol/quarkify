import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import IDiv from "../../interfaces/div";
import "../../styles/components/_accordion.scss";
import { animationTypes } from "../../types/modal";

export default class Content extends PureComponent<IAccordionContentProps> {

  public render() {
    const { expanded, children } = this.props;
    return (
      <CSSTransition
        in={expanded}
        unmountOnExit
        timeout={300}
        classNames="q-slideInDown q-accordion"
      >
        <div className="q-accordion-content">{children}</div>
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
