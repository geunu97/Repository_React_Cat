import styled from '@emotion/styled';

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
  background: white;
  border-radius: 10px;
  font-size: 13px;

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
