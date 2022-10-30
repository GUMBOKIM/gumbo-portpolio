import styled from "styled-components";
import {Retro0StepBox} from "../../common/components/8BitComponent";

export const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const MarioNavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6%;
  margin-bottom: 1%;
  background-color: red;
`

export const InfoSectionContainer = styled.div`
  width: 100%;
  height: 93%;

  display: flex;
  flex-shrink: 0;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export const InfoSection = styled(Retro0StepBox)`
  position: sticky;
  left: 0;

  width: 100%;
  height: 100%;

  flex: 0 0 auto;
  scroll-snap-align: start;

  font-family: "DungGeunMo";
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
`