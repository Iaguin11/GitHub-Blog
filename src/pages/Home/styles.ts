import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/themes/deviceBreakPoints'

export const HomeContainer = styled.main`
  height: 1709px;
`

export const ContentPost = styled.div`
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
  gap: 2rem;
  margin-bottom: 224px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 702px;
    margin: 0 auto;
  }
`
