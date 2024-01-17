import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.png'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo da página." />
    </HeaderContainer>
  )
}
