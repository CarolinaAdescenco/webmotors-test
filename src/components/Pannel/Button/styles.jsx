import styled, { css, keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { shade } from 'polished';
import { device } from '../../../styles/devices';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const variations = {
  outlineYellow: css`
    background: transparent;
    border-color: #f3a312;
    color: #f3a312;
    margin: 0 auto 24px auto;
    height: 40px;
    width: 100%;
    font-size: 16px;

    @media ${device.s} {
      margin: 0 0 0 auto;
      width: 250px;
    }

    &:hover {
      background: #f3a312;
      color: #fff;
    }
  `,
  filledRed: css`
    background: #e94041;
    border-color: #e94041;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    padding: 14px 0;

    @media ${device.md} {
      width: 320px;
    }

    &:hover {
      background: ${shade(0.2, '#e94041')};
      border-color: ${shade(0.2, '#e94041')};
    }
  `,
  default: css`
    background: transparent;
    border-color: #e94041;
    color: #e94041;

    &:hover {
      background: #e94041;
      color: #fff;
    }
  `,
};

export const Load = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
`;

export const ButtonWrapper = styled.button`
  ${props => variations[props.variation || 'default']};
  outline: none;
  transition: 0.2s all;
  cursor: pointer;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  width: 100%;
`;
