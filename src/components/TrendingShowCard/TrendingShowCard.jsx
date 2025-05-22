import React from 'react'
import { Link } from 'react-router-dom'

export default function TrendingShowCard({ Rated }) {
    let { id, poster_path, original_name, vote_average } = Rated
    return <>
        <Link to={`/ShowDetails/${id}`} className='bg-[#1A1A1A] rounded-lg cursor-pointer'>
            <div className='p-2 lg:p-4'>

                <span>
                    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" className='w-full object-cover rounded-lg ' />
                </span>
                <div className='flex flex-col lg:flex-row justify-between items-start xs:items-center gap-2 mt-4'>
                    <span className='bg-[#141414] border-[#262626] p-2 rounded-3xl text-sm lg:text-xs  truncate'>
                        <p className='flex justify-center items-center text-[#999999]'>
                            <i className="fa-solid fa-tv mr-1 text-[10px]"></i>
                            <div className='line-clamp-1'>
                                {original_name.split(' ').slice(0, 3).join(' ')}
                            </div>
                        </p>
                    </span>
                    <span className='bg-[#141414] border-[#262626] p-2 rounded-3xl text-sm lg:text-xs  truncate'>
                        <p className='text-[#999999]'><i className="fa-solid fa-star text-customRed mr-1" ></i>{vote_average.toFixed(1)}</p>
                    </span>
                </div>

            </div>
        </Link>

    </>
}
