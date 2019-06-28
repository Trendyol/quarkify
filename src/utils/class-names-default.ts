import classNames from "classnames";

const classNamesDefault = (props: any) => {
    return classNames(
        props.className,
        props.type && `${props.type}`,
        props.disabled && "disabled",
        props.size && `${props.size}`,
        props.fluid && "fluid",
    );
};

export default classNamesDefault;
