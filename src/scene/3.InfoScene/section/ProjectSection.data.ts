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
                    '    - 디자인과 코드의 상이함으로 발생하는 디자인 QA 개선\n' +
                    '    - 레이아웃 및 스타일링 컴포넌트 재사용을 통한 개발 속도 향상\n' +
                    '- Keycloak을 이용한 인증 인가 기능\n' +
                    '    - Private, Public Routing 기능 구현\n' +
                    '    - Axios Interceptor를 사용한 갱신 및 재요청 기능 구현\n' +
                    '- 번들사이즈 최소화를 위해, lit-element 기반 Chatbot Widget 개발\n' +
                    '- Container/Presentational 패턴을 통한 뷰와 로직 분리\n' +
                    '\n' +
                    'Backend\n' +
                    '\n' +
                    '- 테스트 코드 작성을 통한 코드 품질 향상\n' +
                    '- 도메인 단위 모듈 분리를 통한 코드 품질 향상\n' +
                    '- Jest 테스트 속도 개선 (전체 1517s  => 431s, 통합 테스트 850s => 약 150s)\n' +
                    '    - worker 갯수 늘림 => worker 별 독립적인 database를 사용하도록 수정\n' +
                    '    - 매 \btest case마다 drop, synchronized => jest 실행 시에 한번 동작, test case 종료 후 data만 clean up'
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
                description: '- Hierachy 구조의 데이터를 효율적으로 다루기 위해 node 구조로 관리\n' +
                    '- 사용자 경험을 향상 시키기 위한 조직도 관리 Drag in Drop 기능 구현\n' +
                    '- 대량의 dom element로 인한 성능 이슈를 해결하기 위한 Virtual Window 사용'
            },
            {
                role: 'FullStack',
                title: 'Wapl',
                period: '2022.03-2022.08',
                techStack: 'ReactJS, Mobx, ProObject',
                link: 'https://wapl.ai/',
                description: `- 파일 업로드 및 다운로드 서비스 모듈화
- CSAP 인증을 위한 개인정보 마스킹 기능
- Javascript 코드 Typescript로 전환
- 번들링 사이즈 최적화를 위한 코드 스플리팅`
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
                    "    - 자주 변경되는 요구사항으로 인해 Spring Security가 아닌 Interceptor를 사용\n" +
                    "- AOP를 사용한 인가 및 로깅 기능 구현\n" +
                    "    - 특정 회사의 경우 일부 API 접근 제한 기능\n" +
                    "- 배포 환경을 고려한 파일 업로드 기능 개발(AWS S3, Local, NAS)\n" +
                    "- 문자 및 메일 서비스 연동\n" +
                    "- Slack 로깅 기능 구현\n" +
                    "- 프로시저의 재사용성을 높이기 위한 모듈화"
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