import React from "react";
import styled from "styled-components";

export interface CareerItemProps {
    title: string;
    startDate: string;
    endDate?: string;
    description: string;
}

const CareerItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 500px;
  margin: 10px 0;
  
  div:nth-of-type(1) {
    width: 200px;
  }
`

const CareerItemTitle = styled.div`
  font-size: x-large;
`

const CareerItemPeriod = styled.div`
  font-size: large;
`

const CareerItemDescription = styled.div`
  font-size: large;
`

export const CareerItem: React.FC<{ props: CareerItemProps }> = ({props}) => {

    return (
        <CareerItemContainer>
            <div>
                <CareerItemTitle>{props.title}</CareerItemTitle>
                <CareerItemPeriod>{props.startDate} ~ {props.endDate}</CareerItemPeriod>
            </div>
            <CareerItemDescription>{props.description}</CareerItemDescription>
        </CareerItemContainer>

    );
}

export default CareerItem;