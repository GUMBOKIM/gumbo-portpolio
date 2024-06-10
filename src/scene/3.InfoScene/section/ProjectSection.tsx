import SectionLayout from "./layout/SectionLayout";
import {CompanyInfo} from "./ProjectSection.style";
import ProjectSectionData from "./ProjectSection.data";

const ProjectSection = () => {

    return (
        <SectionLayout>
            <h3>업무 경험</h3>
            {ProjectSectionData.map((company, index) =>
                <CompanyInfo key={index} {...company}/>
            )}
        </SectionLayout>
    )
}

export default ProjectSection;

