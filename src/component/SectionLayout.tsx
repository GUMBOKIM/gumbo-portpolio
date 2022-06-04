import React, {ReactNode} from "react";
import styled from "styled-components";

const SectionContainer = styled.div<{ scrollHeight: number }>`
  width: 100%;
  height: ${props => props.scrollHeight * 100}vh;
`

const SectionSticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`

interface SectionLayOutProps {
    scrollHeight: number;
    children?: ReactNode;
}

const SectionLayOut: React.FC<SectionLayOutProps> = ({scrollHeight, children}) => {

    return (
        <SectionContainer scrollHeight={scrollHeight} onScroll={() => console.log('scroll')}>
            <SectionSticky>
                {children}
            </SectionSticky>
        </SectionContainer>
    );
}

export default SectionLayOut;