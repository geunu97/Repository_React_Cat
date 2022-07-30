import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  font-size: 30px;
  color: gray;
  font-weight: 590;
  width: 98%;
  margin: 0 auto 10px;
`;

export const Card = styled.section`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
