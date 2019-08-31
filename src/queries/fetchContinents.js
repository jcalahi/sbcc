import gql from "graphql-tag";

export const fetchContinents = gql`
  {
    continents {
      code
      name
    }
  }
`;
