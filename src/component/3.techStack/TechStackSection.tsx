import React from "react";
import {SectionContainer, SectionSubTitle, SectionTitle, SectionTitleDivider} from "../CommonComponent";
import styled from "styled-components";
import {TechStackItem} from "./TechStackItem";
import {BackEndData, FrontEndData, LanguageData} from "./TeschStackSectionData";

const TechStackItemsContainer = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1% 0 20px;
  text-align: center;
`

const TechStackSection: React.FC = () => {
    return (
        <SectionContainer>
            <SectionTitle>
                Tech Stack
            </SectionTitle>
            <SectionTitleDivider/>
            <SectionSubTitle>
                Language
            </SectionSubTitle>
            <TechStackItemsContainer>
                {LanguageData.map(language => <TechStackItem key={language.name} image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
            <SectionSubTitle>
                BackEnd
            </SectionSubTitle>
            <TechStackItemsContainer>
                {BackEndData.map(language => <TechStackItem key={language.name} image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
            <SectionSubTitle>
                FrontEnd
            </SectionSubTitle>
            <TechStackItemsContainer>
                {FrontEndData.map(language => <TechStackItem key={language.name} image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
        </SectionContainer>
    );
}

export default TechStackSection;