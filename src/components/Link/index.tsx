import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
  as?: ReactNode
}

export function MyLink({ text, icon, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkContainer>
  )
}
