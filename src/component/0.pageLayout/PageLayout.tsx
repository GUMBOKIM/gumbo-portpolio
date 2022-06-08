import styled from "styled-components";
import React, {ReactNode} from "react";
import './PageLayout.css'
import {PageBackGroundEffect} from "./PageBackGroundEffect";

const PageBackGround = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #2E3445;
  z-index: 0;
  
`;

const PageContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  z-index: 2;

  @media(max-width: 1080px) {
    width: 90vw;
  }
  
  > div {
    margin: 20px 0;
  }
`

export const PageLayout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <PageBackGround>
            <PageBackGroundEffect/>
            <PageContainer className='font'>
                {children}
            </PageContainer>
        </PageBackGround>
    )
}