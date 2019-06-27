import classNames from 'classnames';

const classNamesDefault = (props: any) => {
    return classNames(
        props.className,
        props.primary && 'primary',
        props.secondary && 'secondary',
        props.disabled && 'disabled',
    );
};

export default classNamesDefault;
