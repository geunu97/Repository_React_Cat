import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px 0 40px;
`;

export const Button = styled.button`
  font-size: 25px;
  outline: none;
  background-color: inherit;
  border: none;
  margin: 0 7px;

  &:active {
    color: red;
  }

  &:enabled {
    color: #79bbca;
  }
  &:disabled {
    color: #cfc8c8;
  }
  &:enabled:hover {
    border-radius: 50%;
    background-color: #79bbca;
    color: white;
    cursor: pointer;
  }
`;
