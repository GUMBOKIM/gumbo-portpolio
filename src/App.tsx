import React from 'react';
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import styled from "styled-components";

const PageLayOut = styled.div`
  width: 100vw;
  background-color: green;

  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  width: 1080px;
  background-color: red;

  display: flex;
  flex-direction: column;
  justify-items: center;

`

const App: React.FC = () => {
    return (
        <PageLayOut>
            <PageContainer>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            </PageContainer>
        </PageLayOut>
    );
}

export default App;
