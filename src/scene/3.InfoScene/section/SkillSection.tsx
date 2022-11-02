import SectionLayout from "./layout/SectionLayout";
import * as S from "./SkillSection.style";
import SkillSectionData from "./SkillSection.data";

const SkillSection = () => (
    <SectionLayout>
        <h3>기술 스택</h3>
        {SkillSectionData.map(skill => <S.Skill {...skill} key={skill.kind}/>)}
    </SectionLayout>
);

export default SkillSection;