import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  min-height: 50px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 500px) {
    width: 90%;
  }
`;

export const Logo = styled.i`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.blue};
  padding: 7px 12px;
  display: block;
`;
