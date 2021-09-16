import styled from 'styled-components';

export const LayoutStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  div.body-content {
    flex: 1;
    background: url('/assets/Background.jpg') 100% 100%;
  }
`;

export const CointainerStyle = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
`;
