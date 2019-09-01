import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountryDetails } from '../queries/fetchCountryDetails';
// components
import { Container, RootContainer } from './common/Container';

const CountryDetails = (props) => {
  const { data, loading } = useQuery(fetchCountryDetails, {
    variables: { code: props.match.params.code.toUpperCase() }
  });

  if (loading) return <Container>Loading Country Details...</Container>;

  return (
    <RootContainer>
      {/* <button type="button" onClick={() => props.history.goBack()}>Go Back</button> */}
      <h1>Country Details</h1>
      <p>Name: {data.country.name}</p>
      <p>Native: {data.country.native}</p>
    </RootContainer>
  );
};

export default withRouter(CountryDetails);
