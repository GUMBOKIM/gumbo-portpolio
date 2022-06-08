import React from "react";
import styled from "styled-components";

const TechStackItemContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 3%;
  border-radius: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  color: black;
  font-size: x-large;
`

const TechStackItemLogo = styled.div<{ image: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: white url(${props => props.image});
  background-size: cover;

  :hover {
    transition: opacity 1s;
    opacity: 0.3;
  }
`

export interface TechStackItemProps {
    image: string;
    name: string;
}

export const TechStackItem: React.FC<TechStackItemProps> = ({image, name}) => {
    return <TechStackItemContainer>
        <div>{name}</div>
        <TechStackItemLogo image={image}/>
    </TechStackItemContainer>
}
