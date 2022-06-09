import React from "react";
import {
    PersonInfoContainer,
    PersonInfoContents,
    PersonInfoTitle,
    PersonInfoTitleBottom,
    ProfileImg
} from "./PersonInfoSection.style";
import {PersonIntroduce} from "./PersonIntroduce";
import {ContactItems} from "./ContactItems";

const PersonInfoSection: React.FC = () => {
    return (
        <PersonInfoContainer>
            <PersonInfoTitle>
                To be Steady Developer
            </PersonInfoTitle>
            <PersonInfoTitleBottom>
                개발자 김대희
            </PersonInfoTitleBottom>
            <ProfileImg/>
            <PersonInfoContents>
                {'const develop = (everything : any) => 행복 :)'}
            </PersonInfoContents>
            <PersonIntroduce/>
            <ContactItems/>
        </PersonInfoContainer>
    );
}

export default PersonInfoSection;