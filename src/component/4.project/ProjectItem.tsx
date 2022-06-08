import React, {useState} from "react";
import {
    ProjectItemContainer,
    ProjectItemDivide,
    ProjectItemImage,
    ProjectItemPeriod,
    ProjectItemTitle
} from "./ProjectItem.style";
import {ProjectItemModal, ProjectItemModalProps} from "./ProjectItemModal";

export interface ProjectItemProps {
    divide?: string;
    title?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description?: ProjectItemModalProps
}

export const ProjectItem: React.FC<ProjectItemProps> = ({title, location, startDate, endDate, description}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <ProjectItemContainer onClick={() => setIsModalOpen(true)}>
                <ProjectItemDivide>FE</ProjectItemDivide>
                <ProjectItemTitle>Poly</ProjectItemTitle>
                <ProjectItemPeriod>2021. 08 ~ 2021. 08</ProjectItemPeriod>
                <ProjectItemImage location={"img/profile/ProfileImg.png"}/>
            </ProjectItemContainer>
            {
                isModalOpen &&
                <ProjectItemModal closeModal={() => setIsModalOpen(false)}/>
            }
        </>
    )
}
