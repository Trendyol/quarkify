import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_subheader.scss";
import { sizeTypes } from "../../types/icon";
import { variantTypes } from "../../types/typography";
import Icon from "../icon";
import Typography from "../typography";

export default class SubHeader extends PureComponent<ISubHeader> {
  public render() {
    const {
      title,
      titleComponent,
      subTitle,
      rightIcon,
      leftIcon,
      rightIconSize,
      leftIconSize,
      className,
      leftIconOnClick,
      rightIconOnClick,
      ...props
    } = this.props;
    const subHeaderClasses = classNames("q-subheader", className);
    return (
        <div className={subHeaderClasses} {...props}>
          <div className="left-icon" onClick={leftIconOnClick}>
            {leftIcon && <Icon name={leftIcon} size={leftIconSize || undefined} />}
          </div>
          {subTitle &&
          <div className="title-group">
            <Typography variant={"body"} component={titleComponent} color={"zero"}>{title}</Typography>
            <Typography variant={"subtitle"} color={"light-gray"}>{subTitle}</Typography>
          </div>
          }
          {!subTitle &&
          <div className="title" >
            <Typography variant={"body"} component={titleComponent} color={"zero"}>{title}</Typography>
          </div>
          }
          <div className="right-icon" onClick={rightIconOnClick}>
            {rightIcon && <Icon name={rightIcon} size={rightIconSize || undefined} />}
          </div>
          <div/>
        </div>
    );
  }
}

interface ISubHeader extends IDiv {
  title: string;
  titleComponent?: variantTypes;
  subTitle?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconSize?: sizeTypes;
  rightIconSize?: sizeTypes;
  leftIconOnClick?: (event: any) => any;
  rightIconOnClick?: (event: any) => any;
}
