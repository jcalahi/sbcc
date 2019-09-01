import styled from 'styled-components';

export const Card = styled.div`
  min-width: 220px;
  max-width: 220px;
  margin-bottom: 15px;
`;

export const CardTitle = styled.div`
  border: 1px solid #03A9F4;
  border-radius: 5px;
  color: #34495e;
  font-size: 1.17em;
  font-weight: bold;
  margin: 0 10px;
  padding: 20px;
  text-align: center;
  ${this}:hover {
    border: 1px solid #F44336;
    color: #F44336;
    cursor: pointer;
    padding: 20px;
  }
`;

export const CardItem = styled.div`
  border: 1px solid #03A9F4;
  border-radius: 5px;
  height: 100%;
  margin: 0 10px;
  ${this}:hover {
    border: 1px solid #F44336;
    color: #F44336;
    cursor: pointer;
    & > div {
      color: #F44336;
    }
  }
`;

export const CardItemName = styled.div`
  color: #34495e;
  font-size: 1.17em;
  font-weight: bold;
  padding: 0 10px;
`;
export const CardItemDescription = styled.div`
  font-size: 12px;
  padding: 10px;
`;

