"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import ConfessionCard from './card';

export default function Confessions() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetch(`/api/confessions?id=${Math.random()}`,{cache:"no-store"});
        const result = await response.json();
        setLoading(false);
        return result;
    }
    useEffect(() => {
        getData().then(fetchedData => setData(fetchedData));
    }, []);

    if (loading) {
        return (<div className='text-white flex items-center justify-center mt-56'>Loading</div>);
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            {data.length > 0 ? (
                data.map((confession: any) => (
                    <ConfessionCard key={confession.id} confession={confession} />
                ))
            ) : (
                <p>No confessions available.</p>
            )}
        </div>
    );
}
export const fetchCache = 'force-no-store';