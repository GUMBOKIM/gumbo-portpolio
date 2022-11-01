import styled from "styled-components";

export const HistorySection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HistoryTitle = styled.h1`
  font-size: 1rem;
`;

interface HistoryItemProps {
    name: string;
    content?: string;
    startDate: string;
    endDate?: string;
}

export const HistoryItemContainer = styled.div`
  position: relative;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const HistoryItemWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    display: block;
  }

`

const HistoryLeft = styled.div`
  width: 40%;
  max-width: 200px;
  font-size: 0.7rem;

  & > span:last-of-type {
    margin-top: 0.6rem;
    font-size: 0.2rem;
  }
`;

const HistoryRight = styled.div`
  max-width: 150px;
  width: 30%;
  font-size: 0.6rem;
`;

export const HistoryItem = ({name, content, startDate, endDate}: HistoryItemProps) => {
    return (
        <HistoryItemWrapper>
            <HistoryLeft>
                <span>{name}</span>
                <span>{content}</span>
            </HistoryLeft>
            <HistoryRight>
                <span>{startDate}</span>
                <span>{endDate && '-'}</span>
                <span>{endDate}</span>
            </HistoryRight>
        </HistoryItemWrapper>
    );
}