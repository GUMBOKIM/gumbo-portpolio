import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  position: relative;
  width: 100px;
  height: 120px;
  margin: 3%;
  border-radius: 20px;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: white;
  color: black;
  font-size: medium;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    cursor:pointer;
  }
`

export const ProjectItemDivide = styled.div`
  height: 30px;
  font-size: x-large;
`

export const ProjectItemTitle = styled.div`
  height: 70px;
  font-size: xx-large;
`

export const ProjectItemPeriod = styled.div`
  height: 20px;
  font-size: x-small;
`

export const ProjectItemImage = styled.div<{ location?: string }>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: white url(${props => props.location});
  background-size: contain;
  opacity: 0.2;

  :hover {
    transition: opacity 1s;
    opacity: 0.9;
  }
`

