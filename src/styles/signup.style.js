import styled from 'styled-components';

export const SingupStyle = styled.div`
  height: 100%;

  & > div {
    /* container */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 360px;

    & > div {
      width: 100%;
      
      h1 {
       text-align: center;
       font-size: 32px;
      }

      h1 + p {
       text-align: center;
       margin-top: 30px;
       color: #aeaeae;
      }
    }
  }
`;
