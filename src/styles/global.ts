import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }

`
