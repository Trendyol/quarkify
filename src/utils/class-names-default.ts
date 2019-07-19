import classNames from "classnames";

const classNamesDefault = (props: any) => {
  return classNames(
    props.className,
    props.variant && `q-${props.variant}`,
    props.disabled && "q-disabled",
    props.size && `q-${props.size}`,
    props.fluid && "q-fluid",
    props.error && "q-error",
    props.round && "q-round",
  );
};

export default classNamesDefault;
