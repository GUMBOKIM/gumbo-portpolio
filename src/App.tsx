import React from 'react';
import PersonInfoSection from "./component/1.personalInfo/PersonInfoSection";
import CareerSection from "./component/2.career/CareerSection";

//
// const SectionHeightArr: number[] = [2, 3, 2, 2]
//
// const CalculateCurrentSection = (currentY: number, windowHeight: number) => {
//     let currentSection = 1;
//     let beforeSectionBottomY = 0;
//     for (const sectionHeight of SectionHeightArr) {
//         if (beforeSectionBottomY < currentY && currentY <= beforeSectionBottomY + sectionHeight * windowHeight) break;
//         beforeSectionBottomY += sectionHeight * windowHeight;
//         currentSection++;
//     }
//     return currentSection;
// }
//
// export interface SectionProps {
//     currentScrollY: number;
//     currentSection: number;
// }

const App: React.FC = () => {
    // const [currentScrollY, setCurrentScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    // const [currentSection, setCurrentSection] = useState(1);
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', () => setCurrentScrollY(window.scrollY));
    // }, [])
    //
    // useEffect(() => {
    //     console.log("ScrollY is ", currentScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    //     const windowHeight = window.innerHeight;
    //     console.log(CalculateCurrentSection(currentScrollY, windowHeight));
    //     setCurrentSection(CalculateCurrentSection(currentScrollY, windowHeight));
    // }, [currentScrollY])

    return (
        <>
            <PersonInfoSection/>
            <CareerSection />
            {/*<CareerSection/>*/}
            {/*<Section3/>*/}
            {/*<Section4/>*/}
        </>
    );
}

export default App;
