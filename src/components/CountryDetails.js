import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountryDetails } from '../queries/fetchCountryDetails';
// components
import Container from './common/Container';

const CountryDetails = (props) => {
  const { data, loading } = useQuery(fetchCountryDetails, {
    variables: { code: props.match.params.code.toUpperCase() }
  });

  if (loading) return <Container>Loading Country Details...</Container>;

  return (
    <Container>
      <button type="button" onClick={() => props.history.goBack()}>Go Back</button>
      <h1>Country Details</h1>
      <p>Name: {data.country.name}</p>
      <p>Native: {data.country.native}</p>
    </Container>
  );
};

export default withRouter(CountryDetails);
