import { useEffect, useState } from 'react'
import { ProfileIssuesHeader } from './components/ProfileIssues'
import { IssuesContent, IssuesDescription, PostIssuesContainer } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { PostHomeProps } from '../Home'

const userName = 'Iaguin11'
const repoName = 'GitHub-Blog'

export function Issues() {
  const [postData, setPostData] = useState<PostHomeProps>({} as PostHomeProps)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  async function getIssuesPost() {
    try {
      setLoading(true)
      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getIssuesPost()
  }, [])

  return (
    <PostIssuesContainer>
      <ProfileIssuesHeader loading={loading} postData={postData} />
      <IssuesContent>
        <IssuesDescription>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.{' '}
          </p>
          <p>
            {' '}
            Dynamic typing JavaScript is a loosely typed and dynamic language.
            Variables in JavaScript are not directly associated with any
            particular value type, and any variable can be assigned (and
            re-assigned) values of all types:{' '}
          </p>
        </IssuesDescription>
        <div></div>
      </IssuesContent>
    </PostIssuesContainer>
  )
}
