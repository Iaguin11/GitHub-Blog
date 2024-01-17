import styled from 'styled-components'
import bgHeader from '../../assets/background-img.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100%;
  background: url(${bgHeader}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`
