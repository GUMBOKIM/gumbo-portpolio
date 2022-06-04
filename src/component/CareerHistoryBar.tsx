import React from "react";
import styled from "styled-components";

const HistoryBar = styled.div`
  position: absolute;
  top: 5%;
  right: 40px;

  width: 3px;
  height: 90%;
  
  background-color: #2DB400;
`

const HistoryListContainer = styled.div`
  position: absolute;
  top: 10%;
  height: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface IHistory {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

const HistoryItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
`;

const HistoryItemTitle = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`

const HistoryItemMark = styled.div`
  position: absolute;
  right: 32.5px;
  width: 15px;
  height: 15px;
  background-color: green;
  border: 2px solid yellow;
  border-radius: 50%;
`

const HistoryItem: React.FC<{ historyItemProps: IHistory }> = ({historyItemProps: {title, startDate, endDate}}) => {
    return <HistoryItemContainer>
        <HistoryItemTitle>
            {title}
        </HistoryItemTitle>
        <HistoryItemMark/>
    </HistoryItemContainer>;
}


const HistoryData: IHistory[] = [
    {title: '초등학교', description: '강덕초등학교 졸업', startDate: '11111111', endDate: '1111111'},
    {title: '중학교', description: '고덕중학교 졸업', startDate: '11111111', endDate: '1111111'},
    {title: '고등학교', description: '광문고등학교 졸업', startDate: '11111111', endDate: '1111111'},
    {title: '대학교', description: '건국대학교 졸업', startDate: '11111111', endDate: '1111111'},
];

const CareerHistoryBar: React.FC = () => {
    return (
        <>
            <HistoryBar/>
            <HistoryListContainer>
                {HistoryData.map(history => {
                    return <HistoryItem historyItemProps={history}/>
                        })}
                    </HistoryListContainer>
                </>
                )
                }

                    export default CareerHistoryBar;