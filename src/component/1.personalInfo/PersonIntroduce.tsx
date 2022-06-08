import React from "react";
import styled from "styled-components";

const IntroduceContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: x-large;
  height: 3rem;
`

const IntroduceContent = styled.div`
  position: relative;
  transform-origin: 50% 100%;
  animation: textUp 1s linear;

  @keyframes textUp {
    0% {
      top: 0;
    }
    100% {
      top: -10rem;
    }
  }
`

export const PersonIntroduce: React.FC = () => {
    return (
        <IntroduceContainer>
            <IntroduceContent>
                <p>끊임없이 움직이는,</p>
                <p>항상 유쾌한 개발자 김대희입니다.</p>
            </IntroduceContent>
        </IntroduceContainer>
    )
}