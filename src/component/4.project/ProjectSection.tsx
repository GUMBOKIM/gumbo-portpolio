import React from "react";
import {SectionContainer, SectionSubTitle, SectionTitle, SectionTitleDivider} from "../CommonComponent";

const ProjectSection: React.FC = () => {
    return (
        <SectionContainer>
            <SectionTitle>
                Project
            </SectionTitle>
            <SectionTitleDivider/>
            <SectionSubTitle>
                BackEnd
            </SectionSubTitle>
            <SectionSubTitle>
                FrontEnd
            </SectionSubTitle>
        </SectionContainer>
    );
}

export default ProjectSection;