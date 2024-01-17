import styled from 'styled-components'

export const PostIssuesContainer = styled.main`
  height: 926px;
  background-color: ${(props) => props.theme.background};
`
export const IssuesContent = styled.div`
  width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 24px;
  padding: 40px 32px;
`
export const IssuesDescription = styled.div`
  p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 700;
    line-height: 160%;
  }
`
