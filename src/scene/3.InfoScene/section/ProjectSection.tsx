import SectionLayout from "./layout/SectionLayout";
import {CompanyInfo} from "./ProjectSection.style";
import ProjectSectionData from "./ProjectSection.data";

const ProjectSection = () => {

    return (
        <SectionLayout>
            <h3>프로젝트</h3>
            {ProjectSectionData.map((company, index) =>
                <CompanyInfo key={index} {...company}/>
            )}
        </SectionLayout>
    )
}

export default ProjectSection;

