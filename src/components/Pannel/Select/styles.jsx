import styled, { css } from 'styled-components';
import { device } from '../../../styles/devices';

const sizes = {
  full: css`
    width: 100%;
  `,
  half: css`
    width: 45%;
  `,
};

export const SelectWrapper = styled.div`
  border: 1px solid #b5b5b5;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  margin: 0 0 10px 0;

  label {
    color: #b5b5b5;
    white-space: nowrap;
  }

  select {
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }

  @media ${device.md} {
    ${props => sizes[props.width || 'half']}
  }
`;
