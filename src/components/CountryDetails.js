import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { fetchCountryDetails } from '../queries/fetchCountryDetails';
// components
import Container from './common/Container';

class CountryDetails extends Component {
  render() {
    const { country, loading } = this.props.data;
    if (loading) return <Container>Loading...</Container>;

    return (
      <Container>
        <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
        <h1>Country Details</h1>
        <p>Name: {country.name}</p>
        <p>Native: {country.native}</p>
      </Container>
    );
  }
}

const withGraphQL = graphql(fetchCountryDetails, {
  options: (props) => { return { variables: { code: props.match.params.code.toUpperCase() } } }
})(CountryDetails);
export default withRouter(withGraphQL);
