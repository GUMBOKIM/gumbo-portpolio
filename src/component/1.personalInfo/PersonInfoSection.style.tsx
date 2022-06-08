import styled from "styled-components";

export const PersonInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    margin-bottom: 10px;
  }
`

export const PersonInfoTitle = styled.div`
  font-size: xxx-large;
  font-weight: 100;
  line-height: 1;
  letter-spacing: 0.125em;
  text-align: center;
`

export const ProfileImg = styled.div`
  background: url("img/profile/ProfileImg.png");
  background-size: cover;

  opacity: 0.8;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  transition: transform 3s ease-in-out;

  :hover {
    transform: rotate(1080deg);
  }
`

export const PersonInfoTitleBottom = styled.div`
  font-size: large;
`

export const PersonInfoContents = styled.div`
  font-size: large;
  line-height: 30px;
`

export const ContactItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  > div {
    margin-left: 1%;
  }
`
export const ContactItem = styled.div<{location: string}>`
  width: 25px;
  height: 25px;
  background: white url(${props => props.location});
  background-size: cover;
  border-radius: 15px;
`
