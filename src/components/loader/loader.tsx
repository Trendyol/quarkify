import React, { PureComponent } from "react";
import SpinnerAlt from "../../assets/spinner.gif";
import Spinner from "../../assets/spinner.svg";
import IDiv from "../../interfaces/div";
import "../../styles/components/_loader.scss";

export default class Loader extends PureComponent<ILoaderProps> {

  public render() {
    const { active, ...props } = this.props;

    if (!active) {
      return null;
    }

    return (
      <div className="q-loader" {...props}>
        <img srcSet={Spinner} src={SpinnerAlt} alt="loading" />
      </div>
    );
  }
}

interface ILoaderProps extends IDiv {
  active: boolean;
  type?: string;
}
