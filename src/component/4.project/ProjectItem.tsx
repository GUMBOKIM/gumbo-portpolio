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
    divide: string;
    title: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: ProjectItemModalProps
}

export const ProjectItem: React.FC<{data: ProjectItemProps}> = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <ProjectItemContainer onClick={() => setIsModalOpen(true)}>
                <ProjectItemDivide>{data.divide}</ProjectItemDivide>
                <ProjectItemTitle>{data.title}</ProjectItemTitle>
                <ProjectItemPeriod>{data.startDate} ~ {data.endDate}</ProjectItemPeriod>
                <ProjectItemImage location={data.location}/>
            </ProjectItemContainer>
            {
                isModalOpen &&
                <ProjectItemModal desc={data.description} closeModal={() => setIsModalOpen(false)}/>
            }
        </>
    )
}
