import React from 'react';

const Button = ({ buttonText, clearAll }) => (
<button onClick={clearAll}>{buttonText}</button>
)

export default Button;
