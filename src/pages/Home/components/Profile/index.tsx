import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContent, ProfileContainer, ProfileImg } from './styles'

import { useState, useEffect } from 'react'
import { MyLink } from '../../../../components/Link'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/SpinkKit'

const userName = 'Iaguin11'

export interface GithubUser {
  login: string
  name: string
  avatar_url: string
  id: number
  followers: number
  html_url: string
  bio: string
  company?: string
}

export function Profile() {
  const [data, setData] = useState<GithubUser>({} as GithubUser)
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    try {
      setLoading(true)
      const response = await api.get(`/users/${userName}`)
      setData(response.data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <ProfileContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ProfileImg src={data.avatar_url} />
          <ProfileContent>
            <header>
              <h1>{data.name}</h1>

              <MyLink text="Github" href={data.html_url} target="_blank" />
            </header>
            <p>{data.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {data.login}
              </li>
              {data?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {data.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {data.followers} seguidores
              </li>
            </ul>
          </ProfileContent>
        </>
      )}
    </ProfileContainer>
  )
}
