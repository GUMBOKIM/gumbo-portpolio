import React from "react";
import {SectionContainer, SectionSubTitle, SectionTitle, SectionTitleDivider} from "../CommonComponent";
import styled from "styled-components";
import {TechStackItem, TechStackItemProps} from "./TechStackItem";

const TechStackItemsContainer = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1% 0 20px;
  text-align: center;
`

const LanguageData : TechStackItemProps[] = [
    {
        image: "img/language/java.png",
        name: "Java"
    },
    {
        image: "img/language/javascript.png",
        name: "JS"
    },
    {
        image: "img/language/typescript.png",
        name: "TS"
    }
]

const BackEndData : TechStackItemProps[] = [
    {
        image: "img/backend/spring.png",
        name: "Spring"
    },
    {
        image: "img/backend/mybatis.jpg",
        name: "MyBatis"
    },    {
        image: "img/backend/jpa.png",
        name: "JPA"
    },    {
        image: "img/backend/mysql.png",
        name: "MYSQL"
    },    {
        image: "img/backend/mssql.png",
        name: "MSSQL"
    },    {
        image: "img/backend/jenkins.png",
        name: "Jenkins"
    },
]

const FrontEndData : TechStackItemProps[] = [
    {
        image: "img/frontend/react.png",
        name: "React"
    },
    {
        image: "img/frontend/mobx.png",
        name: "MobX"
    },
    {
        image: "img/frontend/react-query.png",
        name: "React\nQuery"
    },
]

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
                {LanguageData.map(language => <TechStackItem image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
            <SectionSubTitle>
                BackEnd
            </SectionSubTitle>
            <TechStackItemsContainer>
                {BackEndData.map(language => <TechStackItem image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
            <SectionSubTitle>
                FrontEnd
            </SectionSubTitle>
            <TechStackItemsContainer>
                {FrontEndData.map(language => <TechStackItem image={language.image} name={language.name}/>)}
            </TechStackItemsContainer>
        </SectionContainer>
    );
}

export default TechStackSection;