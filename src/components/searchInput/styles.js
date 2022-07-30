import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 0 5px;
  height: 75px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  font-size: 40px;
  padding: 0 15px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  outline: none;
  color: white;
  background-color: black;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
`;
