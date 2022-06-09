import {ProjectItemProps} from "./ProjectItem";

export const ProjectSectionData: ProjectItemProps[] = [
    {
        divide: "FE",
        title: "WAPL",
        location: "img/project/wapl.png",
        startDate: "2022.03",
        description: {
            title: "Tmax Wapl",
            skill: "React, React Native, MobX",
            content: "고객지원 부분 담당",
            link: "https://wapl.ai"
        }
    },
    {
        divide: "BE",
        title: "CanB",
        location: "img/project/canb.jpg",
        startDate: "2021.10",
        endDate: "2022.03",
        description: {
            title: "CabB English",
            skill: "Spring Boot, Mybatis, MSSQL, EC2",
            content:
                "서비스 개요\n" +
                "- LMS(학원 관리 서비스)\n" +
                "    - 학원, 직원, 학생 관리\n" +
                "    - 교육 프로그램 및 수업 관리\n" +
                "담당 업무\n" +
                "- 로그인 처리\n" +
                "    - JWT\n" +
                "    - Session\n" +
                "    - 인가 처리(filter 구현) - IP, 페이지, 권한\n" +
                "- 파일 업로드 처리\n" +
                "    - 고객사 NAS 마운트\n" +
                "- 서비스 부분\n" +
                "    - PLSQL 사용",
            link: "https://www.canb-english.com/"
        }
    },
    {
        divide: "BE",
        title: "EggSchool",
        location: "img/project/eggschool.png",
        startDate: "2021.08",
        endDate: "2021.10",
        description: {
            title: "EggSchool",
            skill: "Tsoa, TypeOrm, MYSQL",
            content:
                "서비스 개요\n" +
                "- LMS(학원 관리 서비스)\n" +
                "    - 학원, 직원, 학생 관리\n" +
                "    - 교육 프로그램 및 수업 관리\n" +
                "담당 업무\n" +
                "- SLACK WEBHOOK 기능 추가\n" +
                "- 메일 보내기 기능 추가\n" +
                "- API 추가 및 수정"
            ,
            link: "https://wapl.ai"
        }
    },
    {
        divide: "BE",
        title: "UNION\n재고관리",
        location: "img/project/union.png",
        startDate: "2021.10",
        endDate: "2021.11",
        description: {
            title: "UNION 재고 입고 관리",
            skill: "SpringBoot, JPA, ThymeLeaf, MySQL",
            content:
                "서비스 개요\n" +
                "- 고객사 자동 입고\n" +
                "    - 고객사 API 사용 입고 현황 조회(크롤링) 및 입고 처리\n" +
                "    - 자재 및 BOM 관리\n" +
                "    - 재고 입출고 및 현황 기능\n" +
                "구현한 기능\n" +
                "- 재고 현황 조회 및 자동 입고 처리\n" +
                "    - API 호출 - 크롤링\n" +
                "    - 정규식, Stream 사용 데이터 분류\n" +
                "- 간단한 ERP 구현\n" +
                "    - 자재 관리\n" +
                "    - 재고 입출고 및 현황",
            link: "https://github.com/GUMBOKIM/ToyProject/tree/a31c63ce0bda140f0403aa4a629cac454d78d446/재고관리자동화/placeorderAutomation"
        },
    },
    {
        divide: "BE",
        title: "내꼬니꼬",
        location: "img/project/neconico.png",
        startDate: "2021.04",
        endDate: "2021.06",
        description: {
            title: "내꼬니꼬",
            skill: "SpringBoot, Mybatis, MySQL, ThymeLeaf, EC2",
            content:
                "서비스 개요\n" +
                "- 번개장터 클론\n" +
                "구현한 기능\n" +
                "- 상점 기능\n" +
                "- 상품 관리 기능\n" +
                "- 상품 기능",
            link: "https://github.com/NecoNicoUsedTradeProject/neconico"
        }
    }
]