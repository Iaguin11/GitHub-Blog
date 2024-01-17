import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-family: 'Nunito';
      font-size: 1rem;
      color: ${(props) => props.theme.baseTitle};
      line-height: 130%;
    }
  }
  p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      font-family: 'Nunito';
      color: ${(props) => props.theme.baseText};
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`
