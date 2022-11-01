import SectionLayout from "./layout/SectionLayout";
import * as S from "./SkillSection.style";

const SkillSection = () => {

    return (
        <SectionLayout>
            <h3>기술 스택</h3>
            <S.SkillHR/>
            <S.SkillTitle>
                언어
            </S.SkillTitle>
            <S.SkillItemContainer>
                <S.SkillItem name='Java Script' src='language/javascript.png'/>
                <S.SkillItem name='Type Script' src='language/typescript.png'/>
                <S.SkillItem name='Java' src='language/java.png'/>
            </S.SkillItemContainer>
            <S.SkillTitle>
                백엔드
            </S.SkillTitle>
            <S.SkillItemContainer>
                <S.SkillItem name='Spring Boot' src='backend/springboot.png'/>
                <S.SkillItem name='Jpa' src='backend/jpa.png'/>
                <S.SkillItem name='Mybatis' src='backend/mybatis.png'/>
                <S.SkillItem name='MYSQL' src='backend/mysql.png'/>
                <S.SkillItem name='MSSQL' src='backend/mssql.png'/>
                <S.SkillItem name='Jenkins' src='backend/jenkins.png'/>
            </S.SkillItemContainer>
            <S.SkillTitle>
                프론트엔드
            </S.SkillTitle>
            <S.SkillItemContainer>
                <S.SkillItem name='React' src='frontend/react.png'/>
                <S.SkillItem name='MobX' src='frontend/mobx.png'/>
                <S.SkillItem name='React Query' src='frontend/reactquery.png'/>
            </S.SkillItemContainer>
        </SectionLayout>
    )
}

export default SkillSection;