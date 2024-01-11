import { AboutProfile, Footer, HomeContainer, InputContent, Profile, ProfileContent } from "./styles";
import avatar from "../../assets/avatar.png"

export function Home(){
  

  return(
    <HomeContainer>
      <Profile>
        <ProfileContent>
          <img src={avatar} alt="" />
          <AboutProfile>
            <div>
              <h3>Cameron Williamson</h3>
              <p>GitHub</p>
            </div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <Footer>
              <span>cameronwll</span>
              <span>Rocketseat</span>
              <span>32 seguidores</span>
            </Footer>
          </AboutProfile>
        </ProfileContent>
      </Profile>

      <InputContent>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>
      </InputContent>
    </HomeContainer>
  )
}