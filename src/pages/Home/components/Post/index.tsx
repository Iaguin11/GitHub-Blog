import moment from 'moment'
import { PostHomeProps } from '../..'
import { Description, LinkPost, PostContainer, PostTitle } from './styles'

interface PostProps {
  post: PostHomeProps
}

export function Post({ post }: PostProps) {
  function dateFormatter(data: string) {
    return moment(data).fromNow()
  }
  const formattedDate = dateFormatter(post.created_at)
  console.log(post.title)
  return (
    <LinkPost to={`/issues/${post.number}`}>
      <PostContainer>
        <PostTitle>
          <h2>{post.title}</h2>
          <span>{formattedDate}</span>
        </PostTitle>
        <Description>{post.body}</Description>
      </PostContainer>
    </LinkPost>
  )
}
