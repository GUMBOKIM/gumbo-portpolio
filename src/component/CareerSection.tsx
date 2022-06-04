import React from "react";
import SectionLayOut from "./SectionLayout";
import styled from "styled-components";
import CareerHistoryBar from "./CareerHistoryBar";

const CareerSectionHeader = styled.div`
  width: 100%;
  height: 10%;
  background-color: yellow;
`

const CareerSectionBody = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  background-color: grey;
`;

const CareerSectionL = styled.div`
  position: relative;
  width: 30%;
  background-color: blue;
`;

const CareerSectionR = styled.div`
  width: 70%;
  background-color: green;
`;

const CareerSection: React.FC = () => {
    return (
        <SectionLayOut scrollHeight={3}>
            <CareerSectionHeader/>
            <CareerSectionBody>
                <CareerSectionL>
                    <CareerHistoryBar/>
                </CareerSectionL>
                <CareerSectionR>
                </CareerSectionR>
            </CareerSectionBody>
        </SectionLayOut>
    )
}

export default CareerSection;