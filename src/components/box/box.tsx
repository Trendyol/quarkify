import classNames from "classnames";
import React, {PureComponent} from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_box.scss";
import {textAlignTypes} from "../../types/box";

export default class Box extends PureComponent<IBoxProps> {
    public render() {
        const {
            children,
            spaced,
            fitted,
            textAlign = "left",
            className,
            ...props
        } = this.props;
        const boxClasses = classNames(
            "q-box",
            spaced && "q-spaced",
            fitted && "q-fitted",
            `q-${textAlign}-aligned`,
            className,
        );
        return (
            <div className={boxClasses} {...props}>{children}</div>
        );
    }
}

interface IBoxProps extends IDiv {
    spaced?: boolean;
    fitted?: boolean;
    textAlign?: textAlignTypes;
    className?: string;
}
