import SectionLayout from "./layout/SectionLayout";
import * as S from './HistorySection.style';

const HistorySection = () => {
    return (
        <SectionLayout>
            <h3>경력사항</h3>
            <S.HistorySection>
                <S.HistoryTitle>교육</S.HistoryTitle>
                <S.HistoryItemContainer>
                    <S.HistoryItem name='광문고등학교' startDate='2008.03' endDate='2011.02'/>
                    <S.HistoryItem name='건국대학교' content='기계공학부' startDate='2012.03' endDate='2019.02'/>
                    <S.HistoryItem name='쌍용교육센터' content='SW 개발자 과정' startDate='2020.12' endDate='2021.05'/>
                </S.HistoryItemContainer>
                <br/>
                <S.HistoryTitle>경력</S.HistoryTitle>
                <S.HistoryItemContainer>
                    <S.HistoryItem name='HL그린파워' content='비개발 직군' startDate='2019.04' endDate='2020.11'/>
                    <S.HistoryItem name='씽소프트' content='백엔드 개발' startDate='2021.08' endDate='2022.03'/>
                    <S.HistoryItem name='티맥스A&C' content='프론트 개발' startDate='2022.03' endDate='재직 중'/>
                </S.HistoryItemContainer>
            </S.HistorySection>
        </SectionLayout>
    )
}

export default HistorySection;