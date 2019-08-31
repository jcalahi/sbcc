import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { fetchContinents } from '../queries/fetchContinents';
// components
import Container from '../components/common/Container';

const Continent = (props) => {
  return (
    <div>{props.continent.name}</div>
  );
}

const Continents = () => {
  const { data, loading } = useQuery(fetchContinents);

  if (loading) {
    return <Container>Loading Continents...</Container>;
  }

  const handleClick = (code) => (/* event */) => {
    console.log(code)
  }

  const renderContinents = (continents) => {    
    return continents.map((continent, idx) => {
      return <Continent key={idx} onContinentClick={handleClick} continent={continent} />;
    });
  }

  return (
    <Container>
      <h1>List of Continents</h1>
      {renderContinents(data.continents)}
    </Container>
  );
}

export default withRouter(Continents);