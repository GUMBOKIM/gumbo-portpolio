import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const InfoSectionContainer = styled.div`
  width: 100%;
  height: calc(39rem);

  display: flex;
  flex-shrink: 0;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
`

