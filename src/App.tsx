import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}
