import classNames from "classnames";
import React, { PureComponent } from "react";
import "../../styles/components/_quantity-selector.scss";
import Button from "../button";
import Icon from "../icon";

export default class QuantitySelector extends PureComponent<IQuantitySelectorProps, any> {

    public render() {
        const count = this.props.count || 0;

        if (count === 0) {
            return <Button fluid variant="secondary" onClick={this.props.onIncrementClick} size="xsmall">
                {this.props.buttonText}
            </Button>;
        }

        return (
            <div className="q-qs-main">
                <div className="q-qs-left">
                    {this.renderDecrementButton()}
                </div>
                <div className="q-qs-middle">
                    {count}
                </div>
                <div className="q-qs-right">
                    {this.renderIncrementButton()}
                </div>
            </div>
        );
    }
    private renderDecrementButton() {
        const deleteIcon = classNames("icon-trash");
        const minusIcon = classNames("icon-minus");

        if (this.props.count === 1) {
            return <Icon
                className={deleteIcon}
                onClick={this.props.onDecrementClick}
                name="delete"
            />;
        } else if (this.props.count && this.props.count > 1) {
            return <Icon
                className={minusIcon}
                onClick={this.props.onDecrementClick}
                name="minus"
            />;
        }

        return null;
    }

    private renderIncrementButton() {
        const plusIcon = classNames("icon-plus");

        return this.props.count && this.props.count > 0 ? <Icon
            className={plusIcon}
            onClick={this.props.onIncrementClick}
            name="plus"
        /> : null;
    }
}

interface IQuantitySelectorProps {
    onIncrementClick: () => void;
    onDecrementClick: () => void;
    count?: number;
    buttonText: string;
}
