import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_accordion.scss";
import { animationTypes } from "../../types/modal";

class Content extends React.Component<IAccordionContentProps> {

  public render() {
    const { show, children } = this.props;
    return (
      <CSSTransition
        in={show}
        unmountOnExit
        timeout={300}
        classNames={`q-slideInDown q-accordion`}
      >
        <div className={"q-accordion-content"}>{children}</div>
      </CSSTransition>
    );
  }
}

interface IAccordionContentProps {
  animation?: animationTypes;
  onChange?: () => void;
  className?: string;
  show: boolean;
}

export default Content;
