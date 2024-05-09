import styled from "styled-components";

const SectionContainer = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    overflow-x: hidden;
    overflow-y: scroll;


    
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

export default SectionContainer;