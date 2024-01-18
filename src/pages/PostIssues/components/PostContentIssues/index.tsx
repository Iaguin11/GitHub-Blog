import Markdown from 'react-markdown'
import { IssuesContent, IssuesDescription } from './styles'

interface PostContentProps {
  description: string
}

export function PostContent({ description }: PostContentProps) {
  return (
    <IssuesContent>
      <IssuesDescription>
        <Markdown>{description}</Markdown>
      </IssuesDescription>
    </IssuesContent>
  )
}
