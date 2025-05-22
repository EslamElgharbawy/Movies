import React from 'react'
import { Link } from 'react-router-dom'

export default function UpComingMovieCard({ comingMovie }) {
    let { id, poster_path, release_date, title } = comingMovie
    return <>
        <Link to={`/MovieDetails/${id}`} className='bg-[#1A1A1A] rounded-lg cursor-pointer'>
            <div className='p-2 lg:p-4'>
                <span>
                    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} className='w-full object-cover rounded-lg ' />
                </span>
                <div className='bg-[#141414] border-borderColor p-2 rounded-3xl lg:text-sm mt-4'>
                    <p className='text-white text-center sm:max-lg:flex sm:max-lg:flex-col'>
                        <span className='text-paragraf'>Released at </span> 
                        <span className='text-[#BFBFBF]'>{release_date}</span>
                    </p>
                </div>
            </div>

        </Link>


    </>
}
