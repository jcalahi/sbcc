import gql from "graphql-tag";

export const fetchSelectedContinent = gql`
  query getContinent {
    selectedContinent @client
  }
`;
