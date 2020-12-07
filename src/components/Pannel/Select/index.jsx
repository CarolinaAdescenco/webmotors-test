import React from 'react';

import { SelectWrapper } from './styles';

const Select = ({ onChange, label, data, placeholder, width }) => {
  return (
    <SelectWrapper width={width}>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select onChange={onChange} id={`select-${label}`}>
        <option value="all">{placeholder}</option>
        {data.map(item => (
          <option key={`${item.Name}-${item.ID}`} value={item.ID}>
            {item.Name}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

export default Select;
