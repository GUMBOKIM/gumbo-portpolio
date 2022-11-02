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
  margin-bottom: 0.5rem;

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
    font-size: 0.5rem;
  }
`;

const HistoryRight = styled.div`
  max-width: 150px;
  width: 30%;
  font-size: 0.6rem;
`;

export interface HistoryProps {
    kind: string;
    histories: {
        name: string;
        content?: string;
        startDate: string;
        endDate?: string;
    }[]
}

export const History = ({kind, histories}: HistoryProps) => {
    return (

        <>
            <HistoryTitle>{kind}</HistoryTitle>
            {
                histories.map(history =>
                    <HistoryItemWrapper>
                        <HistoryLeft>
                            <span>{history.name}</span>
                            <span>{history.content}</span>
                        </HistoryLeft>
                        <HistoryRight>
                            <span>{history.startDate}</span>
                            <span>{history.endDate && '-'}</span>
                            <span>{history.endDate}</span>
                        </HistoryRight>
                    </HistoryItemWrapper>)
            }
        </>
    );
}