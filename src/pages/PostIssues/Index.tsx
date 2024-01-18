import { useEffect, useState } from 'react'

import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { PostHomeProps } from '../Home'
import { ProfileIssuesHeader } from './components/ProfileIssuesHeader'
import { PostContent } from './components/PostContentIssues'

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
    <main>
      <ProfileIssuesHeader loading={loading} postData={postData} />
      <PostContent description={postData.body} />
    </main>
  )
}
