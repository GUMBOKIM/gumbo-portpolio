import React from "react";
import {SectionContainer, SectionTitle, SectionTitleDivider} from "../CommonComponent";
import styled from "styled-components";
import {ProjectItem} from "./ProjectItem";

const ProjectItemsContainer = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const ProjectSection: React.FC = () => {
    return (
        <SectionContainer>
            <SectionTitle>
                Project
            </SectionTitle>
            <SectionTitleDivider/>
            <ProjectItemsContainer>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </ProjectItemsContainer>
        </SectionContainer>
    );
}

export default ProjectSection;