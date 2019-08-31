import gql from "graphql-tag";

export const fetchCountries = gql`
  query Continent($code: String!) {
    continent(code: $code) {
      countries {
        code
        name
        native
        languages {
          name
        }
        continent {
          name
        }
      }
    }
  }
`;
