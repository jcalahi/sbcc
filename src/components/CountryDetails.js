import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountryDetails } from '../queries/fetchCountryDetails';
// components
import { Container, RootContainer, FlexGridContainer } from './common/Container';
import { Card, CardItem, CardItemDescription, CardItemName } from './common/Card';
import { StyledLink } from './common/Link';

const CountryDetails = (props) => {
  const { data, loading } = useQuery(fetchCountryDetails, {
    variables: { code: props.match.params.code.toUpperCase() }
  });

  if (loading) return <Container>Loading Country Details...</Container>;
  return (
    <RootContainer>
      <h1>Country Info</h1>
      <StyledLink>
        <a href="/countries/">Back to Countries</a>
      </StyledLink>
      <FlexGridContainer>
        <Card>
          <CardItem>
            <CardItemName>{data.country.name}</CardItemName>
            <CardItemDescription>
              <div>Currency: {data.country.currency}</div>
              <div>Phone: {data.country.phone}</div>
              <div>Emoji: {data.country.emoji}</div>
              <div>EmojiU {data.country.emojiU}</div>
            </CardItemDescription>
          </CardItem>
        </Card>
      </FlexGridContainer>
    </RootContainer>
  );
};

export default withRouter(CountryDetails);
