import styled from 'styled-components';
import { device } from './devices';

export const Container = styled.div`
  width: 100%;
  max-width: 95%;
  margin: auto;
  padding: 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.md} {
    width: 49%;
  }
`;
