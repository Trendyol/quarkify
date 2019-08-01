import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_subheader.scss";
import {Box} from "../box";
import Icon from "../icon";
import Typography from "../typography";

export default class SubHeader extends PureComponent<ISubHeader> {
  public render() {
    const {
      title,
      rightIcon,
      leftIcon,
      className,
      leftIconOnClick,
      rightIconOnClick,
      ...props
    } = this.props;
    const subHeaderClasses = classNames("q-subheader", className);
    return (
        <div className={subHeaderClasses} {...props}>
          <div className="left-icon" onClick={leftIconOnClick}>
            {leftIcon && <Icon name={leftIcon} />}
          </div>
          <div className="title" >
            <Typography variant={"body"} color={"black"}>{title}</Typography>
          </div>
          <div className="right-icon" onClick={rightIconOnClick}>
            {rightIcon && <Icon name={rightIcon} />}
          </div>
          <div/>
        </div>
    );
  }
}

interface ISubHeader extends IDiv {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconOnClick?: (event: any) => any;
  rightIconOnClick?: (event: any) => any;
}
