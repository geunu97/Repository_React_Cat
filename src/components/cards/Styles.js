import styled from '@emotion/styled';

export const Article = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Section = styled.section`
  margin: 0 5px 10px;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 328px;
    height: 500px;
    object-fit: cover;
    @media screen and (max-width: 992px) {
      width: 270px;
      height: 370px;
    }
    @media screen and (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
    @media screen and (max-width: 615px) {
      width: 400px;
      height: 250px;
    }
    @media screen and (max-width: 450px) {
      width: 300px;
      height: 250px;
    }
  }
`;
