import styled from "styled-components";
import React from "react";
import {ContactItem} from "../1.personalInfo/ContactItems";

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  span {
    margin-right: 0.5rem;
  }
  
  opacity: 0;
  :hover{
    opacity: 1;
    transition: opacity 1s;
  }
`

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <span>이 페이지의 소스는</span>
            <ContactItem location={"img/contact/github.png"}
                         onClick={() => window.open("https://github.com/GUMBOKIM/gumbo-main", '_blank')}/>
            <span>에서 확인하시면 됩니다</span>
        </FooterContainer>
    )
}