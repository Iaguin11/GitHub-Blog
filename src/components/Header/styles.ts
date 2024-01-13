import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 293px;
  background-color: ${(props) => props.theme.baseBorder};
`
export const DivContent = styled.div`
  height: 258px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #3294f8;
    font-family: 'Coda';
    font-size: 1.5;
    font-weight: 400;
    line-height: 160%;
  }
`
