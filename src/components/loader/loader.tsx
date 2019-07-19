import React, { PureComponent } from "react";
import "../../styles/components/_loader.scss";

class Loader extends PureComponent<ILoaderProps> {

  public render() {

    if (!this.props.active) {
      return null;
    }

    return(
      <div className="q-loader">
        {this.renderLoadingAnimation()}
      </div>
    );
  }

  private renderLoadingAnimation = () => (
    <div className="q-loading-animation">
      {Array.from({length : 8}, (_, i) => (
        <div className="q-loader-item" key={i}/>
      ))}
    </div>
  )
}

interface ILoaderProps {
  active: boolean;
}

export default Loader;
