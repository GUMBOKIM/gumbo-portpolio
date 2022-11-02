import SectionLayout from "./layout/SectionLayout";
import * as S from './HistorySection.style';
import HistorySectionData from "./HistorySection.data";

const HistorySection = () => {
    return (
        <SectionLayout>
            <h3>경력사항</h3>
            <S.HistorySection>
                {HistorySectionData.map(history => <S.History {...history}/>)}
            </S.HistorySection>
        </SectionLayout>
    )
}

export default HistorySection;