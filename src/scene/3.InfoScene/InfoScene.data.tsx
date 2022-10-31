import {ReactNode} from "react";
import ProfileSection from "./section/ProfileSection";
import CareerSection from "./section/CareerSection";
import SkillSection from "./section/SkillSection";
import ProjectSection from "./section/ProjectSection";

interface SceneInfoData {
    name: string;
    section: ReactNode;
}

const SceneInfo: SceneInfoData[] = [
    {
        name: 'profile',
        section:
            <ProfileSection key='profile'/>
    },
    {
        name: 'career',
        section:
            <CareerSection key='career'/>
    },
    {
        name: 'skill',
        section:
            <SkillSection key='skill'/>
    },
    {
        name: 'project',
        section:
            <ProjectSection key='project'/>
    }
];

export default SceneInfo;