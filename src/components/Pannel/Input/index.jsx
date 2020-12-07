import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import { InputWrapper, ButtonClear, IconWrapper } from './styles';

const Input = ({ icon, name, label }) => {
  const [value, setValue] = React.useState('');

  return (
    <InputWrapper>
      <IconWrapper>{icon}</IconWrapper>

      <label htmlFor={`input-${name}`}>{label}</label>
      <input
        id={`input-${name}`}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <ButtonClear onClick={() => setValue('')} type="button">
        {value !== '' ? <FaTimesCircle /> : ''}
      </ButtonClear>
    </InputWrapper>
  );
};

export default Input;
