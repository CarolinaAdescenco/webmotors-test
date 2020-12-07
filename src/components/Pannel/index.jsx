import React from 'react';
import {
  FaCarSide,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaChevronRight,
} from 'react-icons/fa';

import Logo from '../../images/webmotors.svg';
import Button from './Button';
import Checkbox from './Checkbox';
import Select from './Select';
import Input from './Input';

import api from '../../services/api';

import { Row, Col, Container } from '../../styles/shared';

import {
  PannelWrapper,
  ContentWrapper,
  Tab,
  LogoWrapper,
  TabOptions,
  CbxWrapper,
  ButtonWrapper,
  Text,
  AdvancedSeach,
  ClearFilters,
  VehiclesWrapper,
  TitleSection,
} from './styles';
import Vehicle from '../Vehicle';

const buttonFilter = [
  {
    id: 0,
    title: 'Carros',
    icon: <FaCarSide />,
  },
  {
    id: 1,
    title: 'Motos',
    icon: <FaMotorcycle />,
  },
];

const distance = [
  {
    ID: 0,
    Name: '100km',
  },
  {
    ID: 1,
    Name: '500km',
  },
];

const year = [
  {
    ID: 0,
    Name: '2018',
  },
  {
    ID: 0,
    Name: '2019',
  },
  {
    ID: 0,
    Name: '2020',
  },
];

const price = [
  {
    ID: 0,
    Name: 'R$ 30 mil',
  },
  {
    ID: 0,
    Name: 'R$ 50 mil',
  },
];

const Pannel = () => {
  const [buttonSelected, setButtonSelected] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const [brands, setBrands] = React.useState([]);
  const [models, setModels] = React.useState([]);
  const [versions, setVersions] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);

  const [brandSelected, setBrandSelected] = React.useState(0);
  const [modelSelected, setModelSelected] = React.useState(0);
  const [versionSelected, setVersionSelected] = React.useState(0);

  const resetFilter = React.useCallback(() => {
    setBrandSelected('');
    setModelSelected();
    setVersionSelected();
    console.log(brandSelected);
  }, []);

  React.useEffect(() => {
    api.get('/Vehicles?Page=1').then(response => {
      setVehicles(response.data);
    });
  }, []);

  React.useEffect(() => {
    api.get('/Make').then(response => {
      setBrands(response.data);
      setModels([]);
      console.log(versionSelected);
    });
  }, []);

  React.useEffect(() => {
    api
      .get('/Model', {
        params: {
          MakeID: brandSelected,
        },
      })
      .then(response => {
        setModels(response.data);
      });
  }, [brandSelected]);

  React.useEffect(() => {
    api
      .get('/Version', {
        params: {
          ModelID: modelSelected,
        },
      })
      .then(response => {
        setVersions(response.data);
      });
  }, [modelSelected]);

  return (
    <Container>
      <PannelWrapper>
        <LogoWrapper src={Logo} alt="Webmotors" title="Webmotors" />
        <Tab>
          <TabOptions>
            {buttonFilter.map(item => (
              <ButtonWrapper
                key={item.id}
                selected={buttonSelected === item.id}
                onClick={() => setButtonSelected(item.id)}
              >
                {item.icon}
                <Text>
                  Comprar
                  <br />
                  <strong>{item.title}</strong>
                </Text>
              </ButtonWrapper>
            ))}
          </TabOptions>

          <Button variation="outlineYellow">Vender meu carro</Button>
        </Tab>
        <ContentWrapper>
          <CbxWrapper>
            <Checkbox name="new-vehicle" label="Novo" />
            <Checkbox name="used-vehicle" label="Usado" />
          </CbxWrapper>

          <Row>
            <Col>
              <Row>
                <Input icon={<FaMapMarkerAlt />} name="where" label="Onde: " />
                <Select data={distance} label="Raio: " />
              </Row>
              <Row>
                <Select data={year} label="Ano Desejado: " />
                <Select data={price} label="Faixa de Preço: " />
              </Row>
            </Col>
            <Col>
              <Row>
                <Select
                  onChange={e => setBrandSelected(e.target.value)}
                  data={brands}
                  label="Marca: "
                  placeholder="Todas"
                />

                <Select
                  onChange={e => setModelSelected(e.target.value)}
                  data={models}
                  label="Modelo: "
                  placeholder="Todos"
                />
              </Row>

              <Row>
                <Select
                  width="full"
                  onChange={e => setVersionSelected(e.target.value)}
                  data={versions}
                  label="Versão: "
                  placeholder="Todas"
                />
              </Row>
            </Col>
          </Row>

          <Row>
            <AdvancedSeach>
              <FaChevronRight />
              Busca Avançada
            </AdvancedSeach>
            <ClearFilters onClick={() => resetFilter()}>
              Limpar filtros
            </ClearFilters>

            <Button
              onClick={() => setLoading(true)}
              isLoading={loading}
              variation="filledRed"
            >
              Ver ofertas
            </Button>
          </Row>
        </ContentWrapper>

        <TitleSection>Veja os classificados da semana</TitleSection>
        <VehiclesWrapper>
          {vehicles.map(v => (
            <Vehicle key={`vehicle-${v.ID}`} data={v} />
          ))}
        </VehiclesWrapper>
      </PannelWrapper>
    </Container>
  );
};

export default Pannel;
