import React from "react";
import CareerItem from "./CareerItem";
import {SectionContainer, SectionTitle, SectionTitleDivider} from "../CommonComponent";
import {CareerSectionData} from "./CareerSectionData";

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