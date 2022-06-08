import React from "react";
import CareerItem, {CareerItemProps} from "./CareerItem";
import {SectionContainer, SectionTitle, SectionTitleDivider} from "../CommonComponent";

const CareerSectionData: CareerItemProps[] = [
    {
        title: '건국대학교',
        startDate: '2013.03',
        endDate: '2019.02',
        description: ['기계공학부 전공']
    },
    {
        title: 'HL그린파워',
        startDate: '2019.03',
        endDate: '2020.11',
        description: ['시작 개발 근무','(비개발 직군)']
    }
    ,{
        title: '쌍용교육센터',
        startDate: '2020.12',
        endDate: '2021.05',
        description: ['JAVA 기반 멀티 플랫폼','SW 개발자 과정 수료']
    }
    ,{
        title: 'Xingsoft',
        startDate: '2021.08',
        endDate: '2022.03',
        description: ['Back-End', 'Developer']
    }
    ,{
        title: 'Tmax Soft',
        startDate: '2022.03',
        description: ['Front-End', 'Developer']
    }
]

const CareerSection: React.FC = () => {
    return (
        <SectionContainer>
            <SectionTitle>
                Career
            </SectionTitle>
            <SectionTitleDivider/>
            {CareerSectionData.map(career => <CareerItem key={career.title} props={career} />)}
        </SectionContainer>
    );
}

export default CareerSection;