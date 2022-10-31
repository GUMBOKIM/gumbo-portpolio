import * as S from "./SectionLayout.style";
import React, {ReactNode} from "react";

interface InfoSectionProps {
    children: ReactNode;
}

const SectionLayout = ({children}: InfoSectionProps) => {
    return (
        <S.InfoSection>
            <S.ScrollWrapper>
                {children}
            </S.ScrollWrapper>
        </S.InfoSection>
    )
}

export default SectionLayout;