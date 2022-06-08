import React from "react";
import styled from "styled-components";


const ModalBackGround = styled.div`
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  animation: changeColor 1s linear;
  animation-fill-mode: forwards;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes changeColor {
    from {
      background-color: rgba(128, 128, 128, 0.0)
    }
    to {
      background-color: rgba(128, 128, 128, 0.6)
    }
  }
`

const ModalBox = styled.div`
  position: fixed;
  margin: 0 auto;

  width: 300px;
  height: 400px;

  background-color: white;
  border-radius: 20px;

  color: black;

  display: flex;
  align-items: center;
  flex-direction: column;
  
`

const ModalTitle = styled.div`
  font-size: x-large;
  height: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalSkill = styled.div`
  font-size: large;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalContent = styled.div`
  font-size: large;
  height: 65%;
  width: 100%;
  padding: 5%;
`

const ModalLink = styled.div`
  font-size: large;
  height: 10%;
  margin: 5%;
  width: 40%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`

export interface ProjectItemModalProps {
    title?: string;
    skill?: string;
    content?: string;
}


export const ProjectItemModal: React.FC<{ modalProps?: ProjectItemModalProps, closeModal: () => void }> = ({closeModal}) => {

    return (
        <>
            <ModalBackGround onClick={() => closeModal()}>
                <ModalBox>
                    <ModalTitle>프로젝트 이름입니다.</ModalTitle>
                    <ModalSkill>기술입니다. 기술입니다. 기술입니다.</ModalSkill>
                    <ModalContent>{`설명입니다. \n 설명입니다. \n설명입니다. \n설명입니다. \n설명입니다. \n설명입니다. \n`} </ModalContent>
                    <ModalLink onClick={() => window.open('http://www.naver.com/', '_blank')}>참조링크</ModalLink>
                </ModalBox>
            </ModalBackGround >
        </>

    )
}
