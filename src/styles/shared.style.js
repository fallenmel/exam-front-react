import styled from 'styled-components';

export const PasswordFieldStyle = styled.div`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #aeaeae;
  background: #fff;
  display: flex;
  width: 100%;

  & > input {
    display: block;
    width: 100%;
    outline: none;
    font-size: 12px;
    border: 0;
  }

  & > img {
    width: 15px;
  }
`;
