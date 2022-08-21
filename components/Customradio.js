import * as React from 'react'
const CustomRadio = () =>
(
const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
      <Button
        ref={ref}
        variantColor={isChecked ? "red" : "gray"}
        aria-checked={isChecked}
        role="radio"
        isDisabled={isDisabled}
        {...rest}
      />
    );
  });

);
export default CustomRadio;