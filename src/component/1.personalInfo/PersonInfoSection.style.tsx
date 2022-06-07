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
  background: url("img/ProfileImg.png");
  background-size: cover;

  opacity: 0.8;
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @keyframes rotate_image{
    100% {
      transform: rotate(360deg);
    }
  }
  
  :hover {
    animation: rotate_image 6s linear infinite;transform-origin: 50% 50%;
  }
`

export const PersonInfoTitleBottom = styled.div`
  font-size: large;
`

export const PersonInfoContents = styled.div`
  font-size: large;
  line-height: 30px;
`