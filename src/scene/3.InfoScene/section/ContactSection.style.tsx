import styled from "styled-components";
import React from "react";
import {ContactData} from "./ContactSection.data";
import {isMobile} from "react-device-detect";

export const HistoryTitle = styled.h1`
  font-size: 1rem;
`;


export interface ContactIconProps {
    type: string;
    name: string;
    location: string;
    destination: string;
}

const ContactItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    margin-top: auto;
  }
`
const ContactItem = styled.div<{ location: string }>`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  background: white url(${props => props.location});
  background-size: cover;
  border-radius: 15px;

  :hover {
    cursor: pointer;
  }
`

export const ContactIcon: React.FC = () => {
    return (
        <ContactItemsContainer>
            {
                ContactData.map(
                    data => {
                        if (data.type === 'link') {
                            return <ContactItem key={data.name}
                                                location={data.location}
                                                onClick={() => window.open(data.destination, '_blank')}/>
                        } else if (isMobile && data.type === 'phone') {
                            if (data.name === 'kakao') {
                                return <ContactItem key={data.name}
                                                    location={data.location}
                                                    onClick={() => window.open(data.destination, '_blank')}/>
                            } else {
                                return <ContactItem key={data.name}
                                                    location={data.location}
                                                    onClick={() => document.location.href = data.destination}/>
                            }
                        } else {
                            return null;
                        }
                    }
                )
            }
        </ContactItemsContainer>
    )
}