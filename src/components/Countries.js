import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchCountries } from '../queries/fetchCountries';
import { useQuery } from '@apollo/react-hooks';
// components
import Container from './common/Container';

const Countries = (props) => {
  const { data, loading } = useQuery(fetchCountries, {
    variables: { code: "AN" }
  });

  const renderCountries = (countries) => {
    return countries.map((country, idx) => {
      return <div key={idx} onClick={() => props.history.push(`/countries/${country.code}`)}>{country.name}</div>
    });
  }

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
      <h1>List of Countries</h1>
      {renderCountries(data.continent.countries)}
    </Container>
  );
};

export default withRouter(Countries);
