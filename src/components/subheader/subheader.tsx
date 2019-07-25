import classNames from "classnames";
import React, { PureComponent } from "react";
import "../../styles/components/_subheader.scss";
import Box from "../box";
import Icon from "../icon";
import Typography from "../typography";

class SubHeader extends PureComponent<ISubHeader> {
  public render() {
    const {
      title,
      rightIcon,
      leftIcon,
      className,
      leftIconOnClick,
      rightIconOnClick,
    } = this.props;
    const subHeaderClasses = classNames("q-subheader", className);
    return (
      <div className={subHeaderClasses}>
        <Box>
          <div className="left-icon">
            {leftIcon && <Icon name={leftIcon} onClick={leftIconOnClick}/>}
          </div>
          <Typography className="title" variant={"body"}>{title}</Typography>
          <div className="right-icon">
            {rightIcon && <Icon name={rightIcon} onClick={rightIconOnClick}/>}
          </div>
          <div/>
        </Box>
      </div>
    );
  }
}

export interface ISubHeader {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;

  leftIconOnClick?(event: React.SyntheticEvent): void;

  rightIconOnClick?(event: React.SyntheticEvent): void;
}

export default SubHeader;
