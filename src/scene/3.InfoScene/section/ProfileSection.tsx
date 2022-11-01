import SectionLayout from "./layout/SectionLayout";
import * as S from "./ProfileSection.style";

const ProfileSection = () => {
    return (
        <SectionLayout>
            <h3>프로필</h3>
            <S.ProfileContainer>
                <S.ProfileBorder/>
                <S.ProfileImg src='./scene/3/profile/profileImg.png' alt='profileImg'/>
            </S.ProfileContainer>
            <S.ProfileDescription>
                <S.ProfileGreeting>
                    항상 즐겁게 개발하는<br/>
                    개발자 김대희입니다!<br/>
                </S.ProfileGreeting>
                <br/>
                <ul>
                    <li>
                        항상 책임감을 가지고 임하는 성격입니다.
                    </li>
                    <li>
                        항상 ‘왜?’라는 의문을 가지고 일을 하고 있습니다.
                    </li>
                    <li>
                        항상 긍정적인 방향으로 생각하고 구성원들과 원활한 소통을 하고 있습니다.
                    </li>
                </ul>
                <br/>
                <br/>
            </S.ProfileDescription>

        </SectionLayout>
    )
}

export default ProfileSection;