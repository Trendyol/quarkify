import classNames from 'classnames';

const classNamesDefault = (props: any) => {
    return classNames(
        props.className,
        props.variant && `${props.variant}`,
        props.disabled && 'disabled',
        props.size && `${props.size}`,
        props.fluid && 'fluid',
    );
};

export default classNamesDefault;
