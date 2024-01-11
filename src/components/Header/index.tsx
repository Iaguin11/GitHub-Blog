import { DivContent, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg"
export function Header(){
  return(
    <HeaderContainer>
      <DivContent>
          <img src={logo} alt="" />
          <h1>GITHUB BLOG</h1>
      </DivContent>
    </HeaderContainer>
  )
}