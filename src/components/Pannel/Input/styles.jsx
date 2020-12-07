import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const InputWrapper = styled.div`
  border: 1px solid #94949e;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  margin: 0 0 10px 0;

  @media ${device.md} {
    max-width: 200px;
    min-width: 200px;
  }

  label {
    color: #b5b5b5;
    font-size: 14px;
  }

  input {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 0 8px;
    width: inherit;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  color: #e93f39;
  margin-right: 8px;
  font-size: 16px;
`;

export const ButtonClear = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    color: #b5b5b5;
  }
`;
