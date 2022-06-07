import styled from "styled-components";
import React, {ReactNode} from "react";
import './PageLayout.css'

const PageBackGround = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #2E3445;
`;

const PageContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`

export const PageLayout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <PageBackGround>
            <PageContainer className='font'>
                {children}
            </PageContainer>
        </PageBackGround>
    )
}