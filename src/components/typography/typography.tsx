import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_typography.scss";
import { colorTypes } from "../../types/color";
import { displayTypes, variantTypes } from "../../types/typography";
import classNamesDefault from "../../utils/class-names-default";

export default class Typography extends PureComponent<ITypographyProps> {

  public render() {
    const {
      variant,
      component,
      bold = false,
      underline,
      noWrap = false,
      display = "initial",
      color,
      children,
      className,
      ...props
    } = this.props;
    const typographyClasses = classNames(
      "q-typography",
      classNamesDefault({ variant }),
      bold && "bold",
      underline && "underline",
      noWrap && "ellipsis",
      display && `q-${display}`,
      color && `${color}`,
      className,
    );
    const defaultVariantMapping: any = {
      body: "p",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      paragraph: "p",
      smallParagraph: "p",
    };
    const Component = component || defaultVariantMapping[variant];
    return (
      <Component className={typographyClasses} {...props}>
        {children}
      </Component>
    );
  }
}

interface ITypographyProps {
  variant: variantTypes;
  component?: string;
  bold?: boolean;
  underline?: boolean;
  noWrap?: boolean;
  display?: displayTypes;
  color?: colorTypes;
  className?: string;
}
