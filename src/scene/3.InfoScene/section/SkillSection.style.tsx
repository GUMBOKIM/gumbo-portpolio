import styled from "styled-components";

export const SkillTitle = styled.div`
  margin: 0.5rem;
`;

export const SkillItemContainer = styled.div`
  max-width: 300px;
  margin: 0.8rem 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SkillItemWrapper = styled.div<{ src?: string }>`
  position: relative;
  width: 4rem;
  height: 4rem;
  margin: 0.25rem;
`;

const SkillItemName = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  font-size: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  word-break: keep-all;
  white-space: pre-wrap;

  opacity: 0;
  background-color: grey;

  :hover {
    animation: hover 1s forwards;
  }

  @keyframes hover {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`

const SkillItemImg = styled.div<{ src?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${p => `./scene/3/skill/${p.src}`});
  background-repeat: no-repeat;
  background-size: cover;
`

interface SkillItemProps {
    name: string;
    src: string;
}

export const SkillItem = ({name, src}: SkillItemProps) => (
    <SkillItemWrapper>
        <SkillItemImg src={src}/>
        <SkillItemName>{name}</SkillItemName>
    </SkillItemWrapper>
);


export const SkillHR = styled.div`
  width: 50%;
  height: 0.1rem;
  margin: 0.5rem 0;
  background-color: black;

`