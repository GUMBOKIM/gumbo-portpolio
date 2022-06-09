import React from "react";
import CareerItem from "./CareerItem";
import {SectionContainer, SectionTitle, SectionTitleDivider} from "../CommonComponent";
import {CareerSectionData, EducationSectionData} from "./CareerSectionData";

const CareerSection: React.FC = () => {
    return (
        <>
            <SectionContainer>
                <SectionTitle>
                    Career
                </SectionTitle>
                <SectionTitleDivider/>
                {CareerSectionData.map(career => <CareerItem key={career.title} props={career}/>)}
            </SectionContainer>
            <SectionContainer>
                <SectionTitle>
                    Education
                </SectionTitle>
                <SectionTitleDivider/>
                {EducationSectionData.map(education => <CareerItem key={education.title} props={education}/>)}
            </SectionContainer>
        </>
    );
}

export default CareerSection;