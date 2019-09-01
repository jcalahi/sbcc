import styled from 'styled-components';

export const StyledLink = styled.div`
  margin-bottom: 20px;

  ${this} > a {
    color: #636e72;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #00b894;
    }
  }
`;
