import React from 'react';
import PersonInfoSection from "./component/1.personalInfo/PersonInfoSection";
import CareerSection from "./component/2.career/CareerSection";
import TechStackSection from "./component/3.techStack/TechStackSection";
import ProjectSection from "./component/4.project/ProjectSection";
import {Footer} from "./component/0.pageLayout/Footer";
import LandingPage from "./component/LandingPage/LandingPage";

const App: React.FC = () => {
    return (
        <>
            <LandingPage/>
            {/*<PersonInfoSection/>*/}
            {/*<CareerSection/>*/}
            {/*<TechStackSection/>*/}
            {/*<ProjectSection/>*/}
            {/*<Footer/>*/}
        </>
    );
}

export default App;
