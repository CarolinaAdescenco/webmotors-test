import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Card = styled.div`
  width: 100%;
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;
  background: #fff;
  margin: 15px 0;

  @media ${device.s} {
    width: 48%;
  }

  @media ${device.md} {
    width: 250px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  object-fit: cover;
  object-position: 50% 0;
  height: 200px;
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const Text = styled.p`
  margin: 0 0 10px 0;
  text-transform: uppercase;
  font-size: 14px;
`;

export const TextInfo = styled(Text)`
  color: #8b8c99;
  height: 40px;
`;

export const Price = styled.h3`
  font-weight: bold;
  font-size: 20px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
