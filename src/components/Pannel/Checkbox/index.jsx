import React from 'react';

import { CheckboxWrapper } from './styles';

const Checkbox = ({ name, label }) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" name={name} id={`cbx-${name}`} />
      <label htmlFor={`cbx-${name}`}>{label}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
