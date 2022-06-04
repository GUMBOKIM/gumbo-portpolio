import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const PageLayOut = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`

root.render(
    <React.StrictMode>
        <PageLayOut>
            <PageContainer>
                <App/>
            </PageContainer>
        </PageLayOut>
    </React.StrictMode>
);
