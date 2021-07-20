import React from 'react';

const MyInput = ({handleChange, handleBlur, value, ...rest}) => (
    <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        {...rest}
    />
);

export default MyInput;