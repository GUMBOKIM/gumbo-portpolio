import SectionLayout from "./layout/SectionLayout";
import * as S from "./ProfileSection.style";

const ProfileSection = () => {
    return (
        <SectionLayout>
            <br/>
            <S.ProfileContainer>
                <S.ProfileBorder/>
                <S.ProfileImg src='./scene/3/profileImg.png' alt='profileImg'/>
            </S.ProfileContainer>
            <br/>
            <S.ProfileDescription>
                <p>
                    안녕하세요!<br/>
                    개발을 좋아하는 개발자<br/>
                    김대희입니다!<br/>
                </p>
                <p>
                    <br/>
                    - 시작한 일에 항상 책임감을 가지고 임하는 성격으로 대학생활 중 여러 공모전에 참여하고 수상했습니다.
                    <br/>
                    - 어떠한 일을 하더라도 항상 ‘왜?’라는 의문을 가지고 일을 하고 있습니다.
                    <br/>
                    - 업무를 진행할때 항상 긍정적인 방향으로 생각하고 구성원들과 원활한 소통을 하며 진행하고 있습니다.
                </p>
            </S.ProfileDescription>

        </SectionLayout>
    )
}

export default ProfileSection;