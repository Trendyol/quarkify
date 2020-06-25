import classnames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_loader.scss";

export default class Loader extends PureComponent<ILoaderProps> {
  public componentDidUpdate(prevProps: ILoaderProps) {
    const { active, disableScroll } = this.props;
    const wasScrollDisabled = prevProps.disableScroll;
    const wasActive = prevProps.active;

    if (active && disableScroll && (!wasScrollDisabled || !wasActive)) {
      document.body.classList.add("q-disable-loader-scroll");
    } else if (wasScrollDisabled && (!active || (active && !disableScroll))) {
      document.body.classList.remove("q-disable-loader-scroll");
    }
  }

  public componentDidMount() {
    if (this.props.disableScroll && this.props.active) {
      document.body.classList.add("q-disable-loader-scroll");
    }
  }

  public render() {
    const { active, fixed, disableScroll, ...props } = this.props;

    if (!active) {
      return null;
    }

    const loaderClasses = classnames({
      "q-loader": true,
      "q-loader-fixed": Boolean(fixed),
    });

    return (
      <div className={loaderClasses} {...props}>
        <div className="q-loader-parent">
          <div className="q-loader-children">
            {Array.from({ length: 12 }, (_, i) => <div key={i.toString()}><div /></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export interface ILoaderProps extends IDiv {
  active: boolean;
  type?: string;
  fixed?: boolean;
  disableScroll?: boolean;
}
