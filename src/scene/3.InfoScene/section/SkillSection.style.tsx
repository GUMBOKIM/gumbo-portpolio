import styled from "styled-components";

export interface SkillProps {
    kind: string;
    skills: {
        name: string;
        src: string;
    }[]
}

export const Skill = ({kind, skills}: SkillProps) => (
    <>
        <SkillTitle>{kind}</SkillTitle>
        <SkillItemContainer>
            {skills.map((skill) =>
                <SkillItemWrapper key={skill.name}>
                    <SkillItemImg src={skill.src}/>
                    <SkillItemName>{skill.name}</SkillItemName>
                </SkillItemWrapper>
            )}
        </SkillItemContainer>
    </>

);


export const SkillHR = styled.div`
  width: 50%;
  height: 0.1rem;
  margin: 0.5rem 0;
  background-color: black;
`

const SkillTitle = styled.div`
  margin: 0.5rem;
`;

const SkillItemContainer = styled.div`
  margin: auto 0;
  max-width: 300px;
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
