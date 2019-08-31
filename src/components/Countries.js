import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountries } from '../queries/fetchCountries';
import { fetchSelectedContinent } from '../queries/fetchSelectedContinent';
// components
import Container from './common/Container';

const Countries = (props) => {
  const { data: {selectedContinent} } = useQuery(fetchSelectedContinent);
  const { data, loading } = useQuery(fetchCountries, {
    variables: { code: selectedContinent || 'AS' }
  });

  if (loading) {
    return <Container>Loading Countries...</Container>;
  }

  const renderCountries = (countries) => {
    return countries.map((country, idx) => {
      return <div key={idx} onClick={() => props.history.push(`/countries/${country.code}`)}>{country.name}</div>
    });
  }

  return (
    <Container>
      <button type="button" onClick={() => props.history.goBack()}>Go Back</button>
      <h1>List of Countries</h1>
      {renderCountries(data.continent.countries)}
    </Container>
  );
};

export default withRouter(Countries);
