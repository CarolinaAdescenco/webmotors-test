import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Price,
  Text,
  CardBottom,
  TextInfo,
} from './styles';

const Vehicle = ({ data }) => {
  const v = { ...data };

  return (
    <Card>
      <Image src={v.Image} alt={v.Model} />
      <CardBody>
        <Text>{`${v.Make} ${v.Model}`}</Text>
        <TextInfo>{v.Version}</TextInfo>
        <Price>{`R$ ${v.Price}`}</Price>
        <CardBottom>
          <span>{`${v.YearFab}/${v.YearModel}`}</span>
          <span>{`${v.KM} km`}</span>
        </CardBottom>
      </CardBody>
    </Card>
  );
};

export default Vehicle;
