import React from "react";
import {ContactData} from "./PersonInfoData";
import {isMobile} from "react-device-detect";
import styled from "styled-components";

const ContactItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5vh;
  
  > div {
    margin-left: 1%;
  }
`
export const ContactItem = styled.div<{location: string}>`
  width: 25px;
  height: 25px;
  background: white url(${props => props.location});
  background-size: cover;
  border-radius: 15px;
  :hover {
    cursor:pointer;
  }
`

export const ContactItems: React.FC = () => {
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