import React from 'react'
import { Link } from 'react-router-dom'

export default function AiringTodayCard({comingShow}) {
    let{id,poster_path,first_air_date}=comingShow
    return <>
        <Link to={`/ShowDetails/${id}`} className='bg-[#1A1A1A] rounded-lg cursor-pointer'>
            <div className='p-2 lg:p-4'>

                <span>
                    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" className='w-full object-cover rounded-lg ' />
                </span>
                <div className='bg-[#141414] border-[#262626] p-2 rounded-3xl lg:text-sm mt-4'>
                    <p className='text-white text-center xs:max-lg:flex xs:max-lg:flex-col'>
                        <span className='text-[#999999]'>First aired</span>
                         <span className='text-[#BFBFBF]'>{first_air_date}</span>
                    </p>
                </div>
            </div>

        </Link>


    </>
}
