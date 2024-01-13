import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { ContentPost, HomeContainer, InputContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputContent>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </InputContent>
      <ContentPost>
        <Post />
        <Post />
      </ContentPost>
    </HomeContainer>
  )
}
