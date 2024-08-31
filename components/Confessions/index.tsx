"use client"
import { useEffect } from "react";
import ConfessionCard from "./card";

export default function Confessions() {
    const confessions = [
        {
            "id": 1,
            "title": "Crush on a Classmate",
            "content": "I've had a crush on my classmate for months now but haven't had the courage to tell them. Every time I see them, my heart races.",
            "timestamp": "2024-08-30T14:22:00Z"
        },
        {
            "id": 2,
            "title": "Stress About Exams",
            "content": "I’m feeling overwhelmed with the upcoming exams. I’m putting in hours of study but still feel unprepared and anxious.",
            "timestamp": "2024-08-29T10:45:00Z"
        },
        {
            "id": 3,
            "title": "Feeling Left Out",
            "content": "I feel left out in my friend group. Lately, it seems like they’re always making plans without me, and it hurts.",
            "timestamp": "2024-08-28T18:30:00Z"
        },
        {
            "id": 4,
            "title": "Confession About a Mistake",
            "content": "I accidentally submitted the wrong project for my assignment, and I’m worried about the grade. I wish I could fix it but it's too late now.",
            "timestamp": "2024-08-27T20:15:00Z"
        },
        {
            "id": 5,
            "title": "Regret Over Missed Opportunities",
            "content": "I regret not taking up that internship offer last semester. I feel like it could have really boosted my career prospects.",
            "timestamp": "2024-08-26T09:00:00Z"
        }
    ];

    useEffect(() => {
        console.log(confessions);
    }, []);

    let i = 0;

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
                {confessions.map((data)=>{
                    return(
                        <ConfessionCard confession={data}/>
                    )
                })}
            </div>
        </>
    );
}