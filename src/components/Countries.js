import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountries } from '../queries/fetchCountries';
import { fetchSelectedContinent } from '../queries/fetchSelectedContinent';
// components
import { Container, FlexGridContainer, RootContainer } from './common/Container';
import { Card, CardItem, CardItemDescription, CardItemName } from './common/Card';
import { StyledList } from './common/List';

const Countries = (props) => {
  const { data: {selectedContinent} } = useQuery(fetchSelectedContinent);
  const { data, loading } = useQuery(fetchCountries, {
    variables: { code: selectedContinent || 'AS' }
  });

  if (loading) {
    return <Container>Loading Countries...</Container>;
  }

  const renderLanguages = (languages) => {
    return languages.map((lang, idx) => {
      return (
        <li key={idx}>
          <span>Name: {lang.name} / Native: {lang.native}</span>
        </li>
      );
    });
  };

  const renderCountries = (countries) => {
    return countries.map((country, idx) => {
      console.log(country);
      return (
        <Card key={idx} onClick={() => props.history.push(`/countries/${country.code}`)}>
          <CardItem>
            <CardItemName>{country.name}</CardItemName>
            <CardItemDescription>
              <div>Continent: {country.continent.name}</div>
              <div>Native: {country.native}</div>
              <div>Languages:
                <StyledList>
                  {renderLanguages(country.languages)}
                </StyledList>
              </div>
            </CardItemDescription>
          </CardItem>
        </Card>
      );
    });
  }

  console.log(props);
  return (
    <RootContainer>
      <h1>List of Countries</h1>
      <FlexGridContainer>
        {renderCountries(data.continent.countries)}
      </FlexGridContainer>
    </RootContainer>
  );
};

export default withRouter(Countries);
