import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: 212px;
  width: 864px;
  margin: 0 auto;
  position: relative;
  bottom: 74px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0xp rgba(0, 0, 0, 0.2);
`
export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 32px;
  gap: 32px;

  img {
    height: 148px;
    width: 148px;
  }
`
export const AboutProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > p {
    width: 612px;

    color: ${(props) => props.theme.baseText};
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 700;
    line-height: 160%;
  }

  div {
    display: flex;
    gap: 390px;

    h3 {
      color: #e7edf4;
      font-family: 'Nunito';
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
    }
    p {
      font-family: 'Nunito';
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;

      a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${(props) => props.theme.bradBlue};
        text-decoration: none;
      }
    }
  }
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #c4d4e8;
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`
