import ProfileSection from "./sections/ProfileSection.tsx";
import CareerSection from "./sections/CareerSection.tsx";
import WorkExperienceSection from "./sections/WorkExperienceSection.tsx";
import {SectionContainer} from "./components/layout";
import {ScrollBar} from "./components/scrollbar";

const App = () => {

  return (
      <>
    <SectionContainer>
      <ProfileSection/>
      <CareerSection/>
      <WorkExperienceSection/>
    </SectionContainer>
          <ScrollBar/>
      </>
  )
}

export default App
