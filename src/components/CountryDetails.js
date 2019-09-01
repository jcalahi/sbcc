import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { fetchCountryDetails } from '../queries/fetchCountryDetails';
// components
import { Container, RootContainer, FlexGridContainer } from './common/Container';
import { Card, CardItem, CardItemDescription, CardItemName } from './common/Card';

const CountryDetails = (props) => {
  const { data, loading } = useQuery(fetchCountryDetails, {
    variables: { code: props.match.params.code.toUpperCase() }
  });

  if (loading) return <Container>Loading Country Details...</Container>;
  return (
    <RootContainer>
      {/* <button type="button" onClick={() => props.history.goBack()}>Go Back</button> */}
      <h1>Country Info</h1>
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
