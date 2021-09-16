import styled from 'styled-components';

export const HeaderStyle = styled.div`
  background: #fff;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      &:first-child {
        img {
          width: 150px;
        }
      }

      &:last-child {
        ul {
          list-style-type: none;
          display: flex;
          align-items: center;
          margin: 0 -10px;
          li {
            margin: 0 10px;

            a {
              color: #000;
              text-decoration: none;
            }

            &.btn {
              padding: 10px 20px;
              background: #8d77ee;
              color: #fff;
              border-radius: 25px;

              & > a {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
