import styled from 'styled-components';

export const FormStyle = styled.div`
  margin-top: 20px;

  & > form {
    div.field-row {
      display: block;
      margin-top: 10px;

      & > label {
        display: block;
        font-size: 16px;
        color: #aeaeae;
      }

      & > input {
        display: block;
        width: 100%;
        outline: none;
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 15px;
        border: 1px solid #aeaeae;
      }

      p.error {
        color: red;
        font-size: 12px;
        font-style: italic;
      }
    }
  }

  button {
    width: 100%;
    border: 0;
    padding: 5px 20px;
    border-radius: 15px;
    background: #8d77ee;
    color: #fff;
    margin-top: 20px;

    &:disabled {
      background: #dadada;
      color: #000;
    }
  }
`;
