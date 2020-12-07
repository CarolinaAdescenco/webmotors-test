import React from 'react';
import { ButtonWrapper, Load } from './styles';

const Button = ({ onClick, isLoading, children, variation }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      isLoading={isLoading}
      variation={variation}
    >
      {isLoading ? <Load /> : children}
    </ButtonWrapper>
  );
};

export default Button;
