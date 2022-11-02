import {SkillProps} from "./SkillSection.style";

const SkillSectionData: SkillProps[] = [
    {
        kind: '언어',
        skills: [
            {name: 'Java Script', src: 'language/javascript.png'},
            {name: 'Type Script', src: 'language/typescript.png'},
            {name: 'Java', src: 'language/java.png'}
        ]
    }, {
        kind: '백엔드',
        skills: [
            {name: 'Spring Boot', src: 'backend/springboot.png'},
            {name: 'Jpa', src: 'backend/jpa.png'},
            {name: 'Mybatis', src: 'backend/mybatis.png'},
            {name: 'MYSQL', src: 'backend/mysql.png'},
            {name: 'MSSQL', src: 'backend/mssql.png'},
            {name: 'Jenkins', src: 'backend/jenkins.png'}
        ]
    }, {
        kind: '프론트엔드',
        skills: [
            {name: 'React', src: 'frontend/react.png'},
            {name: 'MobX', src: 'frontend/mobx.png'},
            {name: 'React Query', src: 'frontend/reactquery.png'}
        ]
    },

]

export default SkillSectionData;