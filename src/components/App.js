import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { fetchContinents } from '../queries/fetchContinents';
// components
import { Container, FlexGridContainer, RootContainer } from '../components/common/Container';
import { Card, CardTitle } from './common/Card';

const Continent = ({ onContinentClick, continent }) => {
  console.log(continent);
  return (
    <Card onClick={() => onContinentClick(continent.code)}>
      <CardTitle>{continent.name}</CardTitle>
    </Card>
  );
};

const Continents = (props) => {
  const { data: { continents }, loading } = useQuery(fetchContinents);
  const client = useApolloClient();
  
  if (loading) {
    return <Container>Loading Continents...</Container>;
  }

  const handleClick = (code) => {
    client.writeData({ data: { selectedContinent: code }});
    props.history.push('/countries/');
  }

  const renderContinents = (continents) => {    
    return continents.map((continent, idx) => {
      return <Continent key={idx} onContinentClick={handleClick} continent={continent} />;
    });
  }

  return (
    <RootContainer>
      <h1>List of Continents</h1>
      <FlexGridContainer>
        {renderContinents(continents)}
      </FlexGridContainer>
    </RootContainer>
  );
}

export default withRouter(Continents);
