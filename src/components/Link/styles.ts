import styled, { css } from 'styled-components'

interface LinkProps {
  variant?: 'iconLeft'
}

export const LinkContainer = styled.a<LinkProps>`
  border: none;
  background: none;
  color: ${(props) => props.theme.bradBlue};
  font-family: 'Nunito';
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 160%;

  height: 19px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  transition: 0.4s;
  border-bottom: 1px solid transparent;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.bradBlue};
  }

  ${({ variant }) =>
    variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
