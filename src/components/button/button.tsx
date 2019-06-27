import React from 'react';
import IVariant from '../../interfaces/IVariant';
import '../../styles/components/_button.scss';
import classNamesDefault from '../../utils/class-names-default';

class Button extends React.Component<IProps, any> {
    public render() {
        return (
            <button
                className={classNamesDefault(this.props)}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

interface IProps extends IVariant {
    disabled?: boolean;
    className?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}

export default Button;
