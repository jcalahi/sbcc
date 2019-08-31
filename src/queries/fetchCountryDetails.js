import gql from "graphql-tag";

export const fetchCountryDetails = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      name
      native
      continent {
        name
      }
      phone
      currency
      languages {
        name
      }
      emoji
      emojiU
    }
  }
`;
