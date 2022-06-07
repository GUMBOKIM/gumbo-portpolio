import React from "react";
import {
    PersonInfoContainer,
    PersonInfoContents,
    PersonInfoTitle,
    PersonInfoTitleBottom,
    ProfileImg
} from "./PersonInfoSection.style";

const PersonInfoSection: React.FC = () => {
    return (
        <PersonInfoContainer>
            <PersonInfoTitle>
                To be Full-Stack Developer
            </PersonInfoTitle>
            <PersonInfoTitleBottom>
                개발자 김대희
            </PersonInfoTitleBottom>
            <ProfileImg/>
            <PersonInfoContents>
                {'const work = (everything : any) => 꿀잼;'}
            </PersonInfoContents>
        </PersonInfoContainer>
    );
}

export default PersonInfoSection;