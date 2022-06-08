import React from "react";
import styled from "styled-components";

export interface CareerItemProps {
    title: string;
    startDate: string;
    endDate?: string;
    description: string[];
}

const CareerItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 0.8rem;
  
  > div:nth-of-type(1) {
    width: 40%;
    max-width: 200px;
  }

  > div:nth-of-type(2) {
    width: 60%;
    max-width: 200px;
  }
`

const CareerItemTitle = styled.div`
  font-size: large;
  margin-bottom: 0.5rem;
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
            <CareerItemDescription>
                {props.description.map(description =>  <span key={description}>{description}<br/></span>)}
            </CareerItemDescription>
        </CareerItemContainer>
    );
}

export default CareerItem;