import {ProjectInfoProps} from "./ProjectSection.style";

const ProjectSectionData: ProjectInfoProps[] = [
    {
        companyName: "스켈터랩스",
        projects: [
            {
                role: 'FullStack',
                title: 'Bella',
                period: '2023.08-',
                techStack: 'ReactJS, NestJS, MongoDB',
                description: 'Frontend\n' +
                    '\n' +
                    '- 디자인 시스템 도입 (MUI 기반)\n' +
                    '  - Figma 디자인과 코드의 일치\n' +
                    '  - 컴포넌트 재사용을 통한 개발 속도 향상\n' +
                    '\n' +
                    '- Keycloak을 이용한 인증 인가 기능\n' +
                    '  - Private, Public Routing 기능 구현\n' +
                    '  - 로그인 정보 갱신 및 재요청 기능 구현\n' +
                    '\n' +
                    '- lit-element 기반 Chatbot 개발\n' +
                    '\n' +
                    'Backend\n' +
                    '\n' +
                    '- Jest 테스트 속도 개선\n' +
                    '=> 전체 1517s  => 431s\n' +
                    '=> 통합 테스트 850s => 150s\n' +
                    '  - worker 갯수 증가\n' +
                    '  => worker 별 독립 db 사용\n' +
                    '  - 매 test case마다 drop, synchronized\n' +
                    '  => jest 실행 시 drop, synchronized 1회\n' +
                    '  => test case마다 data clean up\n'
            }
        ],
    },
    {
        companyName: "티맥스 와플",
        projects: [
            {
                role: 'Frontend',
                title: 'SupperApp',
                period: '2022.08-2023.08',
                techStack: 'ReactJS, Mobx, React-Query',
                description: '- Hierachy 구조의 데이터를 관리\n' +
                    '=> object에서 node 구조로 관리\n' +
                    '\n' +
                    '- 조직도 관리 DND 기능 구현\n' +
                    '\n' +

                    '- 대량의 dom element로 인한 성능 이슈를 해결하기 위한 Virtual Window 사용'
            },
            {
                role: 'FullStack',
                title: 'Wapl',
                period: '2022.03-2022.08',
                techStack: 'ReactJS, Mobx, ProObject',
                link: 'https://wapl.ai/',
                description: '- 파일 업로드 및 다운로드 서비스 모듈화\n' +
                    '\n' +
                    '- CSAP 인증을 위한 개인정보 마스킹 기능\n' +
                    '\n' +
                    '- Javascript 코드 Typescript로 전환\n' +
                    '\n' +
                    '- 번들링 사이즈 최적화를 위한 코드 스플리팅'
            }
        ],
    },
    {
        companyName: "씽소프트",
        projects: [
            {
                role: 'Backend',
                title: 'CanB',
                period: '2021.08-2022.03',
                techStack: 'SpringBoot, MSSQL, Mybatis, Redis',
                link: 'https://www.canb-english.com/canb',
                description: "- 인증인가 기능 개발\n" +
                    "    - Scale-out을 고려해 Redis-Session을 사용\n" +
                    '\n' +
                    "- AOP를 사용한 인가 및 로깅 기능 구현\n" +
                    "    - 특정 회사의 경우 일부 API 접근 제한 기능\n" +
                    '\n' +
                    "- 배포 환경 고려 파일 업로드 기능 개발\n" +
                    "=> 전략 패턴 사용 AWS S3, Local, NAS\n" +
                    '\n' +
                    "- 문자 및 메일 서비스 연동\n" +
                    '\n' +
                    "- Slack 로깅 기능 구현\n" +
                    '\n' +
                    "- 프로시저의 재사용성을 높이기 위한 모듈화\n" +
                    '\n' +
                    "- 통계 기능 개선(40s  => 0.5s)\n" +
                    "=> 통계 기록 테이블 추가, Batch 사용"
            },
            {
                role: '백엔드',
                title: 'EggSchool',
                period: '2021.08-2021.10',
                techStack: 'TypeScript, Tsoa, MYSQL, TypeORM',
                link: 'https://e.eggschool.net/',
                description: `- 기능 개발
- 슬랙 WebHook
- 파이어베이스 PUSH
- 메일 보내기`
            }
        ],
    },
]

export default ProjectSectionData;