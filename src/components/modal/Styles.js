import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const ModalContainer = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80%;
  max-height: 80%;
  padding: 10px;
  border-radius: 10px;
  font-size: 13px;
  animation: ${fadeIn} 0.5s;
  @media screen and (max-width: 768px) {
    width: 90%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    .icon {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 85%;
    margin: 8px 0;
  }

  p {
    text-align: start;
  }
`;
