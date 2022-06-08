import React from "react";
import {
    ContactItem,
    ContactItemsContainer,
    PersonInfoContainer,
    PersonInfoContents,
    PersonInfoTitle,
    PersonInfoTitleBottom,
    ProfileImg
} from "./PersonInfoSection.style";
import {ContactData} from "./PersonInfoData";
import {isMobile} from "react-device-detect";

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
            <ContactItemsContainer>
                {
                    ContactData.map(
                        data => {
                            if (data.type === 'link') {
                                return <ContactItem key={data.name}
                                                    location={data.location}
                                                    onClick={() => window.open(data.destination, '_blank')}/>
                            } else if (isMobile && data.type === 'phone') {
                                    return <ContactItem key={data.name}
                                                        location={data.location}
                                                        onClick={() => document.location.href = data.destination}/>
                            } else {
                                return null;
                            }
                        }
                    )
                }
            </ContactItemsContainer>

        </PersonInfoContainer>
    );
}

export default PersonInfoSection;