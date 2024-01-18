import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../../styles/themes/deviceBreakPoints'

export const IssuesContent = styled.div`
  padding: 40px 32px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 700px;
    margin: 15% auto;
  }
`
export const IssuesDescription = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  gap: 30px;

  p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 700;
    line-height: 160%;
  }
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.baseTitle};
    font-family: 'Nunito';
    font-size: 1.25rem;
    font-weight: 700;
  }
  ul,
  li {
    font-family: 'Nunito';
    padding-left: 20px;
    line-height: 140%;
    color: ${(props) => props.theme.baseText};
  }
  pre {
    /* background: ${(props) => props.theme.basePost}; */
    background: #444444;
    color: #fff;
    padding: 16px;
  }
`
