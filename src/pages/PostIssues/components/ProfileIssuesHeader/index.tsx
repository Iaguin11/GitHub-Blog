import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileIssuesContainer } from './styles'
import { MyLink } from '../../../../components/Link'
import { useNavigate } from 'react-router-dom'
import { PostHomeProps } from '../../../Home'
import { Spinner } from '../../../../components/SpinkKit'
import moment from 'moment'

interface ProfileIssuesHeaderProps {
  postData: PostHomeProps
  loading: boolean
}

export function ProfileIssuesHeader({
  postData,
  loading,
}: ProfileIssuesHeaderProps) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  function dateFormatter(data: string) {
    return moment(data).fromNow()
  }
  const formattedDate = dateFormatter(postData?.created_at)

  return (
    <ProfileIssuesContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <MyLink
              text="Voltar"
              onClick={handleBack}
              as="button"
              variant="iconLeft"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
            />
            <MyLink
              text="Ver no Github"
              href={postData.html_url}
              target="_black"
            />
          </header>

          <h1>{postData.title}</h1>
          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </span>
          </div>
        </>
      )}
    </ProfileIssuesContainer>
  )
}
