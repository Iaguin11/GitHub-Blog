import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../../styles/themes/deviceBreakPoints'

export const ProfileIssuesContainer = styled.section`
  width: 100%;
  height: 169px;
  margin-top: -5.5rem;
  background: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
  }
  h1 {
    font-family: 'Nunito';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
    line-height: 130%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      color: ${(props) => props.theme.baseSpan};
      font-family: 'Nunito';
      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;

      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 700px;
    margin: -88px auto;
  }
`
