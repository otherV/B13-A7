"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext()

const TimelineProvider = ({ children }) => {
    const [timelineList, setTimelineList] = useState([]);
    const data = { timelineList, setTimelineList }
    return (
        <TimelineContext value={data}>
            {children}
        </TimelineContext>
    );
};

export default TimelineProvider;