import React, { PureComponent } from "react";
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
        <div className="q-loader-parent">
          <div className="q-loader-children">
            {Array.from({ length: 12 }, (_, i) => <div key={i.toString()}><div /></div>)}
          </div>
        </div>
      </div>
    );
  }
}

interface ILoaderProps extends IDiv {
  active: boolean;
  type?: string;
}
