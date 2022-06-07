import React from "react";
import styled from "styled-components";

const PersonInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  > div {
    margin-bottom: 10px;
  }
`

const PersonInfoTitle = styled.div`
  font-size: xxx-large;
`

const ProfileImg = styled.div`
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

const PersonInfoTitleBottom = styled.div`
  font-size: large;
`

const PersonInfoContents = styled.div`
  font-size: large;
  line-height: 30px;
`



const PersonInfoSection: React.FC = () => {
    return (
        <PersonInfoContainer>
            <PersonInfoTitle>
                개발자 김대희
            </PersonInfoTitle>
            <PersonInfoTitleBottom>
                aka GUMBO
            </PersonInfoTitleBottom>
            <ProfileImg/>
            <PersonInfoContents>
                누구보다 소통하며 개발하고 싶습니다.<br/>
                누구보다 재미있게 개발하고 싶습니다.<br/>
                누구보다 유쾌하게 개발하고 싶습니다.
            </PersonInfoContents>
        </PersonInfoContainer>

    );
}

export default PersonInfoSection;