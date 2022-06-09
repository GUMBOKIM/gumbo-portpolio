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
  width: 90%;
  
  font-size: x-large;
  height: 15%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalSkill = styled.div`
  display: flex;
  align-items: center;
  
  width: 90%;
  font-size: medium;
  height: 10%;
  padding: 1%;
`

const ModalContent = styled.div`
  font-size: small;
  height: 60%;
  width: 90%;
  padding: 5%;
  text-align: left;
  white-space: pre-wrap;
  line-height: 1rem;
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
    title: string;
    skill: string;
    content: string;
    link: string;
}

export const ProjectItemModal: React.FC<{ desc: ProjectItemModalProps, closeModal: () => void }> = ({desc, closeModal}) => {

    return (
        <>
            <ModalBackGround onClick={() => closeModal()}>
                <ModalBox>
                    <ModalTitle>{desc.title}</ModalTitle>
                    <ModalSkill>{desc.skill}</ModalSkill>
                    <ModalContent><p>{desc.content}</p></ModalContent>
                    <ModalLink onClick={() => window.open(desc.link, '_blank')}>링크</ModalLink>
                </ModalBox>
            </ModalBackGround >
        </>

    )
}
