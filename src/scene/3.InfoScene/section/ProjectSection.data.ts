import {ProjectInfoProps} from "./ProjectSection.style";

const ProjectSectionData: ProjectInfoProps[] = [
    {
        companyName: "티맥스A&C",
        projects: [
            {
                role: '프론트',
                title: 'SupperApp',
                period: '2022.03-2022.09',
                techStack: 'React, Mobx',
                description: '개발 진행 중'
            },
            {
                role: '프론트, 백엔드',
                title: 'Wapl',
                period: '2022.03-2022.09',
                techStack: 'React, Mobx, ProObject, Tibero, SpringBoot',
                link: 'https://wapl.ai/',
                description: "고객지원 & 어드민 \n" +
                    "유지보수 및 신규 기능 개발\n" +
                    " - 파일 업로드 기능 모듈화\n" +
                    " - CSAP 인증을 위한 개인정보 보호 처리\n" +
                    "    (마스킹 처리)\n" +
                    " - 코드 스플리팅\n" +
                    "레거시코드 스프링 전환"
            }
        ],
    },
    {
        companyName: "씽소프트",
        projects: [
            {
                role: '백엔드',
                title: 'CanB',
                period: '2021.08-2022.03',
                techStack: 'SpringBoot, MSSQL, Mybatis, Redis',
                link: 'https://www.canb-english.com/canb',
                description: "1. 인증/인가 처리\n  - 인증 처리 - RedisSession\n  - 인가 처리 - Interceptor 구현\n  - 특정 인가 처리 -  AOP\n2. 비즈니스 로직\n  - PL/SQL 사용 구현\n3. SMS 서비스 연동\n4. 파일 업로드\n  - 고객사 파일서버 사용\n5. 통계 캐싱\n  - MSSQL 스케줄러"
            },
            {
                role: '백엔드',
                title: 'EggSchool',
                period: '2021.08-2021.10',
                techStack: 'TypeScript, tosa, MYSQL, TypeORM',
                link: 'https://e.eggschool.net/',
                description: `1. API 추가
- 슬랙 WebHook
- 파이어베이스 PUSH
- 메일 보내기`
            }
        ],
    },
]

export default ProjectSectionData;