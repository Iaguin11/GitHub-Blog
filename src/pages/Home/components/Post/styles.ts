import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 416px;
  height: 260px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  background: ${(props) => props.theme.basePost};
`
export const PostTitle = styled.div`
  display: flex;

  h2 {
    width: 283px;

    color: ${(props) => props.theme.baseTitle};
    font-family: 'Nunito';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
  }
  span {
    color: ${(props) => props.theme.baseSpan};
    font-family: 'Nunito';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`
export const Description = styled.section`
  width: 352px;
  height: 108px;

  color: ${(props) => props.theme.baseText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  font-family: 'Nunito';
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
`
