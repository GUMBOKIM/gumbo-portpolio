import React, {useEffect, useState} from "react";
import './PageLayout.css'
import {EffectItem} from "./PageLayoutEffectItem";

export interface PageSizeInfo {
    pageHeight: number;
    pageWidth: number;
}

export const PageBackGroundEffect: React.FC = () => {
    const [pageSizeInfo, setPageSizeInfo] = useState<PageSizeInfo>({pageHeight: 0, pageWidth: 0});

    useEffect(() => {
        setPageSizeInfo({
            pageHeight :  document.getElementById('root')?.scrollHeight!,
            pageWidth : document.getElementById('root')?.scrollWidth!
        })
    }, [])

    const createEffectItems = (iter : number) => {
        let items = [];
        for(let i = 0; i < iter; i++){
            items.push(<EffectItem key={i} pageSizeInfo={pageSizeInfo}/>);
        }
        return items;
    }

    return (
        <>
            { pageSizeInfo.pageHeight !== 0 && createEffectItems(10)}
        </>
    )
}