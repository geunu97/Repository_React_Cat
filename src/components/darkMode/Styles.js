import styled from '@emotion/styled';

export const Label = styled.label`
  margin-top: 30px;

  position: relative;
  display: block;
  width: 45px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .onoff-switch {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 12px;
    background-color: #fff;
    box-shadow: 1px 1px 3px #eaeaea, -1px -1px 3px #eaeaea;
    border-radius: 20px;
    transition: 0.4s;
  }

  .onoff-switch:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 4px;
    top: -5px;
    background-image: url('moon.png');
    background-size: 15px;
    background-position: center;
    background-color: #fff;
    background-repeat: no-repeat;
    transition: 0.4s;
    border-radius: 20px;
    box-shadow: 1px 1px 3px #eaeaea;
  }

  input:checked + .onoff-switch {
    background-color: #444;
    box-shadow: inset 1px 1px 2px #222;
  }

  input:checked + .onoff-switch:before {
    background-image: url('moon.png');
    background-color: #333;
    box-shadow: none;
    transform: translateX(16px);
  }
`;
