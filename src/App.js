import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { fetchContinents } from './queries/fetchContinents';
// components
import Container from './components/common/Container';

const Continent = (props) => {
  const { code, name } = props.continentInfo;
  const handleClick = (code) => (/* event */) => {
    props.onContinentClick(code);
  }

  return (
    <div onClick={handleClick(code)}>{name}</div>
  );
}

class Continents extends Component {

  handleContinentClick = (code) => {
    this.props.history.push('/countries/');
  }

  renderContinents = (continents) => {    
    return continents.map((continent, idx) => {
      return <Continent key={idx} continentInfo={continent} onContinentClick={this.handleContinentClick} />;
    });
  }

  render() {
    const { continents, loading } = this.props.data;
    if (loading) return <Container>Loading...</Container>;

    return (
      <Container>
        <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
        <h1>List of Continents</h1>
        {this.renderContinents(continents)}
      </Container>
    );
  }
}

const withGraphQL = graphql(fetchContinents)(Continents);
export default withRouter(withGraphQL);
