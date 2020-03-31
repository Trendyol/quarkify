import React, { PureComponent } from "react";
import "../../styles/components/_quantity-selector.scss";
import Icon from "../icon";
import { IProps as IIConProps } from "../icon/icon";

export default class QuantitySelector extends PureComponent<IQuantitySelectorProps> {
    public render() {
        const { count } = this.props;

        return (
            <div className="q-qs-main">
                <div className="q-qs-left">
                    {this.renderDecrementIcon()}
                </div>
                <div className="q-qs-middle">
                    {count || 0}
                </div>
                <div className="q-qs-right">
                    {this.renderIncrementIcon()}
                </div>
            </div>
        );
    }

    private renderDecrementIcon() {
        const { onDecrement, count, iconProps } = this.props;
        const disabled = !count;
        const className = count === 1 ? "icon-trash" : "icon-minus";
        const name = count === 1 ? "trash" : "minus";

        return <Icon
            {...iconProps}
            name={name}
            disabled={disabled}
            className={className}
            onClick={onDecrement}
        />;
    }

    private renderIncrementIcon() {
        const { onIncrement, iconProps } = this.props;

        return <Icon
            {...iconProps}
            name="plus"
            className={"icon-plus"}
            onClick={onIncrement}
        />;
    }
}

interface IQuantitySelectorProps {
    onIncrement: () => void;
    onDecrement: () => void;
    count?: number;
    iconProps?: IIConProps | any;
}
