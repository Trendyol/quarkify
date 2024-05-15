import classNames from "classnames";
import React, { PureComponent } from "react";
import Content from "./accordion-content";
import Header from "./accordion-header";

export default class Accordion extends PureComponent<IAccordionProps, IAccordionState> {
  public static Header = Header;
  public static Content = Content;

  public constructor(props: IAccordionProps) {
    super(props);
    this.state = {
      expanded: this.props.expanded || false,
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  public componentWillReceiveProps(
    nextProps: IAccordionProps,
    prevProps: IAccordionProps) {
    if (nextProps.expanded !== undefined) {
      this.setState({ expanded: nextProps.expanded });
    }
  }

  public componentWillUpdate(
    nextProps: Readonly<IAccordionProps>,
    nextState: Readonly<IAccordionState>,
    nextContext: any): void {
    if (nextState.expanded !== this.state.expanded) {
      if (!!this.props.onChange) {
        this.props.onChange(nextState.expanded);
      }
    }
  }

  public render() {
    const {
      className,
      children,
    } = this.props;

    const accordionClasses = classNames("q-accordion", className);
    const [AccordionHeader, AccordionContent] = React.Children.toArray(children);

    return (
      <div className={accordionClasses}>
        {React.cloneElement(
          AccordionHeader as React.ReactElement,
          { expanded: this.state.expanded, handleClick: this.handleHeaderClick })
        }
        {React.cloneElement(AccordionContent as React.ReactElement, { expanded: this.state.expanded })}
      </div>
    );
  }

  private handleHeaderClick() {
    this.setState({ expanded: !this.state.expanded });
  }

}

interface IAccordionProps {
  className?: string;
  expanded?: boolean;
  children?: React.ReactNode;
  onChange?: (expanded: boolean) => void;
}

interface IAccordionState {
  expanded: boolean;
}
