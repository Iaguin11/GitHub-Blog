import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkPost = styled(Link)`
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.6s ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.baseSpan};
    border-radius: 10px;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  height: 264px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  background: ${(props) => props.theme.basePost};
`
export const PostTitle = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 1.25rem;

  h2 {
    flex: 1;

    color: ${(props) => props.theme.baseTitle};
    font-family: 'Nunito';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  span {
    color: ${(props) => props.theme.baseSpan};
    font-family: 'Nunito';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`
export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  color: ${(props) => props.theme.baseText};

  font-family: 'Nunito';
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
`
