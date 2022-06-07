import React from "react";
import SectionLayOut from "./SectionLayout";
import {SectionProps} from "../App";

const PersonInfoSection: React.FC<SectionProps> = React.memo((
    {
        currentScrollY, currentSection
    }) => {
    return (
        <SectionLayOut scrollHeight={2}>
            <div>
                Developer Gumbo
            </div>
        </SectionLayOut>
    );
}, ((prevProps, nextProps) => nextProps.currentSection !== 1
));

export default PersonInfoSection;