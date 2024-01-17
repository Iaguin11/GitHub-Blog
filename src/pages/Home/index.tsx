import { useCallback, useEffect, useState } from 'react'
import { Input } from './components/Input/Input'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { ContentPost, HomeContainer } from './styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/SpinkKit'

export interface PostHomeProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
const username = 'Iaguin11'
const repoName = 'GitHub-Blog'

export function Home() {
  const [posts, setPosts] = useState<PostHomeProps[]>([])
  const [loading, setLoading] = useState(true)

  const getPost = useCallback(
    async (query: string = '') => {
      try {
        setLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPost()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <Input getPost={getPost} postLength={posts.length} />
      {loading ? (
        <Spinner />
      ) : (
        <ContentPost>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </ContentPost>
      )}
    </HomeContainer>
  )
}
