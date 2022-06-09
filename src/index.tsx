import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import {PageLayout} from "./component/0.pageLayout/PageLayout";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <PageLayout>
            <App/>
        </PageLayout>
    </React.StrictMode>
);
