import styled from "styled-components";

const ScrollBarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    
    width: 20px;
    height: 100vh;
`

const ScrollBar = () => {
    return <ScrollBarContainer style={{backgroundColor: 'green'}}>

    </ScrollBarContainer>;
}

export default ScrollBar