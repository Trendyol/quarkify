import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";

export default class BoxGroup extends PureComponent<IBoxGroupProps> {
    public render() {
        const {
            children,
            className,
            ...props
        } = this.props;
        const boxGroupClasses = classNames(
            "q-box-group",
            className,
        );
        return (
            <div className={boxGroupClasses} {...props}>
                {children}
            </div>
        );
    }
}

// tslint:disable-next-line:no-empty-interface
interface IBoxGroupProps extends IDiv {
    children?: React.ReactNode;
}
