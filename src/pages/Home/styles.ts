import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 1709px;
  background-color: ${(props) => props.theme.background};
`

export const InputContent = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 18px 16px;
    font-size: 1rem;
    color: ${(props) => props.theme.baseSubTitle};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.baseBorder};
    background: ${(props) => props.theme.baseInput};
  }
  input::placeholder {
    color: ${(props) => props.theme.baseLabel};
    font-family: 'Nunito';
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 160%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.baseSubTitle};
      font-family: 'Nunito';
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
    }
    span {
      color: ${(props) => props.theme.baseSpan};
      font-family: 'Nunito';
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
    }
  }
`
export const ContentPost = styled.div`
  max-width: 864px;
  display: flex;
  gap: 30px;
  margin: 48px auto;
`
