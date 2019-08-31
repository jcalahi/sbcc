import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { fetchContinents } from '../queries/fetchContinents';
// components
import Container from '../components/common/Container';

const Continent = ({ onContinentClick, continent }) => {
  return (
    <div onClick={() => onContinentClick(continent.code)}>{continent.name}</div>
  );
}

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
    <Container>
      <h1>List of Continents</h1>
      {renderContinents(continents)}
    </Container>
  );
}

export default withRouter(Continents);
