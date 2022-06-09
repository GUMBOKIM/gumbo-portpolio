import React from 'react';
import PersonInfoSection from "./component/1.personalInfo/PersonInfoSection";
import CareerSection from "./component/2.career/CareerSection";
import TechStackSection from "./component/3.techStack/TechStackSection";
import ProjectSection from "./component/4.project/ProjectSection";

const App: React.FC = () => {
    return (
        <>
            <PersonInfoSection/>
            <CareerSection />
            <TechStackSection />
            <ProjectSection />
        </>
    );
}

export default App;
