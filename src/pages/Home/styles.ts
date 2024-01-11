import styled from "styled-components";

export const HomeContainer = styled.main`
  height:1709px;
  background-color: ${props => props.theme.background};
`
export const Profile = styled.div`
  height: 212px;
  width: 864px;
  margin: 0 auto;
  position: relative;
  bottom: 74px;


  border-radius: 10px;
  background-color: ${props => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0xp rgba(0, 0, 0, 0.20);
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

    color: ${props => props.theme.baseText};
    font-family: 'Nunito'; 
    font-size: 1rem;
    font-weight: 700;
    line-height: 160%;
  }

  div {
    display: flex;
    gap: 300px;

    h3 {
      color: #E7EDF4;
      font-family: 'Nunito';
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
    }
    p {
      color: ${props => props.theme.bradBlue};

      font-family: 'Nunito';
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
    }
  }
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 24px;

  span {
    color: #c4d4e8; 
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`
export const InputContent = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 18px 16px;
    font-size: 1rem;
    color: ${props => props.theme.baseSubTitle};
    border-radius: 6px;
    border: 1px solid ${props => props.theme.baseBorder};
    background: ${props => props.theme.baseInput};
  }
  input::placeholder {
    color: ${props => props.theme.baseLabel};
    font-family: 'Nunito';
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 160%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme.baseSubTitle};
      font-family: 'Nunito';
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%; 
    }
    span {
      color: ${props => props.theme.baseSpan};
      font-family: 'Nunito';
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
    }
  }
`