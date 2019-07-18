import React from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_accordion.scss";
import { animationTypes } from "../../types/modal";

class Content extends React.PureComponent<IAccordionContentProps> {

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

interface IAccordionContentProps {
  animation?: animationTypes;
  onChange?: () => void;
  className?: string;
  expanded?: boolean;
}

export default Content;
