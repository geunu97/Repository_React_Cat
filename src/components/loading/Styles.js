import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Section = styled.section`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    font-size: 15px;
    font-weight: 600;
  }
  .spinner {
    border-left: 2px solid #58a4a4;
    border-bottom: 2px solid #58a4a4;
    border-radius: 50%;

    animation: ${spin} 2s linear infinite;
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
`;
