import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  ProfileContent,
  AboutProfile,
  Footer,
  ProfileContainer,
} from './styles'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface GithubUser {
  login: string
  name: string
  avatar_url: string
  id: number
  followers: number
  html_url: string
  bio: string
}

export function Profile() {
  const [data, setData] = useState<GithubUser>({} as GithubUser)

  const handleFetch = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/Iaguin11')
      console.log(data)
      setData(response.data)
    } catch (error) {
      console.log('Deu merda')
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={data.avatar_url} alt="" />
        <AboutProfile>
          <div>
            <h3>{data.name}</h3>
            <p>
              <Link to={data.html_url} target="_black">
                GitHub
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </Link>
            </p>
          </div>
          <p>{data.bio}</p>
          <Footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {data.login}
            </span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {data.followers} Seguidores
            </span>
          </Footer>
        </AboutProfile>
      </ProfileContent>
    </ProfileContainer>
  )
}
