import React, { useEffect, useState } from 'react'
import TrendingShowCard from '../TrendingShowCard/TrendingShowCard';

export default function TrendingShow() {
    let [TrandingShow, setTrandingShow] = useState([])
    function getTrandingShows() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
            .then(res => res.json())
            .then(res => {
                setTrandingShow(res.results)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getTrandingShows()
    }, [])
    return <>
        <div className='container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
            {TrandingShow.map((trd) => <TrendingShowCard key={trd.id} Rated={trd} />)}
        </div>


    </>
}
