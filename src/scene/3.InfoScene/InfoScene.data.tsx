import {ReactNode} from "react";
import ProfileSection from "./section/ProfileSection";
import HistorySection from "./section/HistorySection";
import SkillSection from "./section/SkillSection";
import ProjectSection from "./section/ProjectSection";
import ContactSection from "./section/ContactSection";

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
        name: 'history',
        section:
            <HistorySection key='history'/>
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
    },
    {
        name: 'contact',
        section:
            <ContactSection key='contact'/>
    }
];

export default SceneInfo;