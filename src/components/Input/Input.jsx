import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        type={props.type}
        ref={ref}
        // onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
});

export default Input;
