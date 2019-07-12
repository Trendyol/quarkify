import React, { FunctionComponent } from "react";
import "../../styles/components/_loader.scss";

const Loader: FunctionComponent<ILoaderProps> = ({ active }) => {
  if (!active) {
    return null;
  }

  return (
    <div className="loader">
      {Array.from({length : 8}, (_, i) => (
        <div key={i}/>
      ))}
    </div>
  );
};

interface ILoaderProps {
  active: boolean;
}

export default Loader;
