import styled from 'styled-components';
import { device } from '../../styles/devices';

export const PannelWrapper = styled.section`
  width: 100%;
  max-width: 933px;
  margin: auto;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  background: #fff;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.md} {
    min-height: 312px;
    max-height: 312px;
    padding: 0 40px;
  }
`;

export const LogoWrapper = styled.img`
  margin-right: auto;
  margin-bottom: 45px;
  margin-top: 40px;
  width: 170px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.s} {
    flex-direction: row;
    align-items: center;
  }
`;

export const TabOptions = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${device.md} {
    margin-bottom: 0px;
  }
`;

export const CbxWrapper = styled.div`
  display: flex;
  margin: 0 0 15px 0;
`;

export const Option = styled.button`
  border: none;
  border-bottom: 3px solid #e93f39;
  text-align: left;
  text-transform: uppercase;
  background: transparent;
`;

export const ButtonWrapper = styled.button`
  border: none;
  border-bottom: 3px solid
    ${props => (props.selected ? '#e93f39' : 'transparent')};
  text-align: left;
  text-transform: uppercase;
  background: transparent;

  outline: none;
  cursor: pointer;
  padding: 8px 16px;

  display: flex;
  align-items: flex-end;

  svg {
    font-size: 28px;
    margin-right: 16px;
    color: #94949e;
  }
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #94949e;

  strong {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const AdvancedSeach = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #e94041;
  font-size: 16px;
  margin: 0 0 15px 0;

  @media ${device.md} {
    margin: 0;
  }

  svg {
    font-size: 10px;
    margin-right: 8px;
  }
`;

export const ClearFilters = styled.button`
  background: transparent;
  border: none;
  color: #94949e;
  font-size: 16px;
  margin: auto;
  cursor: pointer;
  outline: none;
  margin: 0 0 15px 0;

  @media ${device.md} {
    margin: 0 25px 0 auto;
  }
`;

export const VehiclesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitleSection = styled.h2`
  font-weight: bold;
  font-size: 28px;
  margin: 42px 0 24px 0;
  position: relative;

  &:before {
    content: '';
    width: 70px;
    height: 3px;
    bottom: -10px;
    left: 0px;
    position: absolute;
    background: #e94041;
  }
`;
