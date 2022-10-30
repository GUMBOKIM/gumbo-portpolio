import * as S from "../InfoScene.style";
import React, {ReactNode} from "react";

interface InfoSectionProps {
    sectionName: string;
    children: ReactNode;
}

const InfoSection = ({sectionName, children}: InfoSectionProps) => {
    return (
        <S.InfoSection id={`section-${sectionName}`}>
            <S.ScrollWrapper>
                {children}
            </S.ScrollWrapper>
        </S.InfoSection>
    )
}

export default InfoSection;