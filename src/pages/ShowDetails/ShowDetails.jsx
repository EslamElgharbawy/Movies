import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import FreeTrial from '../../components/FreeTrial/FreeTrial';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Carousel } from 'flowbite-react';

export default function ShowDetails() {
    let [ShowDetails, setShowDetails] = useState(null)
    let [TVKeyword, setTVKeyword] = useState([])
    let [TVCast, setTVCast] = useState([])
    let [TVReview, setTVReview] = useState([])
    let [Seasons, setSeasons] = useState([])
    let [Episodes, setEpisodes] = useState([])
    let [Video, setVideo] = useState([])
    let [isOpen, setisOpen] = useState(false)
    let { id } = useParams()
    const [openSeason, setOpenSeason] = useState(null);

    const handleToggleSeason = (seasonNumber) => {
        if (openSeason === seasonNumber) {
            setOpenSeason(null); 
        } else {
            setOpenSeason(seasonNumber); 
            getEpisodes(seasonNumber);   
        }
    };

    function getKeywords() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}/keywords`, options)
            .then(res => res.json())
            .then(res => {
                setTVKeyword(res.results)
            })
            .catch(err => console.error(err));
    }
    function getCast() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setTVCast(res.cast)
            })
            .catch(err => console.error(err));
    }
    function getReviews() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                setTVReview(res.results)
            })
            .catch(err => console.error(err));
    }
    function getTrailerShow() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                const trailer = res.results.find(video => video.type === "Trailer" && video.site === "YouTube");
                if (trailer) {
                    setVideo(trailer);
                }
            })
            .catch(err => console.error(err));
    }
    function getShowDetails() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setShowDetails(res)
                setSeasons(res.seasons)
            })
            .catch(err => console.error(err));


    }
    function getEpisodes(Season_Number) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };
        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${Season_Number}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setEpisodes(prev => ({ ...prev, [Season_Number]: res.episodes }))
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        getShowDetails();
        getKeywords();
        getCast();
        getReviews();
        getTrailerShow()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [id])

    return <>
        {ShowDetails ? <>
            <section className='relative w-full xs:w-11/12 lg:w-10/12 mx-auto pb-36 pt-20 xs:pt-28 lg:pt-32'>
                <div className='relative w-full h-full sm:max-xl:h-[600px] xs:max-sm:h-[500px] rounded-xl'>
                    <div className='relative w-full h-full '>
                        <img src={`https://image.tmdb.org/t/p/original/${ShowDetails.backdrop_path}`} alt="" className='w-full h-full object-cover rounded-xl' />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />

                    </div>
                    <div className='absolute w-9/12 z-40 text-center bottom-16  left-1/2 transform -translate-x-1/2'>
                        <span className='mb-5 block'>
                            <h1 className='font-bold text-4xl text-white mb-2'>{ShowDetails.original_name}</h1>
                            <p className='line-clamp-2 text-paragraf'>
                                {ShowDetails.overview}
                            </p>
                        </span>
                        <div className='lg:flex justify-center items-center lg:flex-wrap lg:gap-4'>
                            <button
                                onClick={() => { setisOpen(true) }}
                                className='xs:max-lg:w-full xs:max-lg:mb-5 bg-customRed hover:bg-red-700 transition-all duration-300 px-5 py-3 rounded-lg text-white flex justify-center items-center text-sm font-semibold'>
                                <i className="fa-solid fa-play mr-2"></i>
                                Play Trailer
                            </button>
                            <span className='flex justify-center items-center gap-2'>
                                <button className='rounded-lg border-borderColor border-2' style={{ backgroundColor: "#0F0F0F" }}>
                                    <i className="fa-solid fa-plus p-3 text-white"></i>
                                </button>
                                <button className='rounded-lg border-borderColor border-2' style={{ backgroundColor: "#0F0F0F" }}>
                                    <i className="fa-solid fa-thumbs-up p-3 text-white"></i>
                                </button>
                                <button className='rounded-lg border-borderColor border-2' style={{ backgroundColor: "#0F0F0F" }}>
                                    <i className="fa-solid fa-volume-high p-3 text-white"></i>
                                </button>
                            </span>
                        </div>

                    </div>
                </div>
                {isOpen && Video && (
                    <div onClick={() => { setisOpen(false) }} className='fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center'>
                        <div className="absolute w-full max-w-4xl p-4 top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <iframe
                                className='w-full h-[400px] lg:h-[500px] rounded-lg'
                                src={`https://www.youtube.com/embed/${Video.key}`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Trailer"
                            ></iframe>
                        </div>
                    </div>
                )}
            </section>

            <section className='lg:w-10/12 mx-3 lg:max-xl:w-11/12 lg:mx-auto xs:max-lg:flex xs:max-lg:flex-col lg:grid grid-cols-1 lg:grid-cols-5 gap-3 mb-20'>
                <div className='col-span-3 '>
                    <div className='bg-backColor py-5 px-8 mb-4 rounded-xl ' id='Seasons'>
                        <h1 className='text-white font-semibold mb-5'>Seasons and Episodes</h1>
                        <Accordion className='grid border-0 ' id='Episodes'>
                            <AccordionPanel>
                                {Seasons.map((season) => (
                                    <div className='border-borderColor border-2 rounded-lg mb-5' key={season.id}>
                                        <AccordionTitle
                                            onClick={() => handleToggleSeason(season.season_number)}
                                            className='relative bg-[#0F0F0F] focus:ring-transparent hover:bg-[#0F0F0F] pb-5 text-paragraf rounded-lg'
                                        >

                                            <span className='text-white mr-3 text-lg'>{season.name}</span>
                                            <span className='text-paragraf'>{season.episode_count} Episodes</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                fill='none'
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                className={`absolute svg top-5 right-5  text-paragraf transition-transform duration-300 origin-center }`}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d={
                                                        openSeason === season.season_number && Episodes[season.season_number]?.length > 0
                                                            ? 'M5 15l7-7 7 7'
                                                            : 'M19 9l-7 7-7-7'
                                                    }
                                                />
                                            </svg>
                                        </AccordionTitle>

                                        {openSeason === season.season_number && Episodes[season.season_number]?.length > 0 && (
                                            Episodes[season.season_number].map((eps) => (
                                                <AccordionContent key={eps.id} className="bg-[#0F0F0F]">
                                                    <div className='container xl:flex justify-center items-center lg:gap-5'>
                                                        <div className='flex justify-center xs:max-xl:justify-between  items-center gap-2 relative xs:max-xl:mb-4'>
                                                            <span className='text-paragraf font-semibold xs:max-xl:text-2xl'>0{eps.episode_number}</span>
                                                            <div className='w-[172px] h-[118px] relative group'>
                                                                <img src={`https://image.tmdb.org/t/p/w500/${eps.still_path}`} alt="" className='w-full h-full object-cover rounded-lg ' />
                                                                <div className='absolute w-[50px] h-[50px] rounded-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.8)] z-10 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                                    <i class="fa-regular fa-circle-play text-white z-20"></i>
                                                                </div>
                                                                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex justify-between items-center mb-2'>
                                                                <h1 className='text-white font-semibold text-lg'>
                                                                    {eps.name}
                                                                </h1>
                                                                <span className='text-paragraf border-borderColor border-2 p-2 rounded-lg bg-[#141414] text-sm'>
                                                                    <i class="fa-regular fa-clock mr-2"></i>
                                                                    {eps.runtime} min
                                                                </span>
                                                            </div>
                                                            <p className='text-paragraf line-clamp-3'>
                                                                {eps.overview}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            ))
                                        )}
                                    </div>
                                ))}
                            </AccordionPanel>
                        </Accordion>
                    </div>
                    <div className='bg-backColor p-4 mb-4 rounded-xl order-1'>
                        <h1 className='text-paragraf mb-2'>Description</h1>
                        <p className='text-white lg:text-sm'>{ShowDetails.overview}</p>
                    </div>
                    <div className='lg:hidden bg-backColor p-4 rounded-xl order-2 mb-4'>
                        {ShowDetails.first_air_date ?
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-regular fa-calendar mr-1 "></i>Released Year</span>
                                <p className='text-white'>{ShowDetails.first_air_date}</p>
                            </div> : ""
                        }


                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-solid fa-language mr-1"></i>Available Languages</span>
                            <div className='flex items-center gap-2 text-white text-[14px]'>
                                {ShowDetails.spoken_languages.map((lang) => {
                                    return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{lang.name}</p></span>)
                                })}

                            </div>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-regular fa-star mr-1"></i>Rating</span>
                            <div className='flex items-center gap-2 text-white text-[14px]'>
                                <span className='bg-[#141414] border-borderColor border-2 rounded-lg'>
                                    <div className='py-2 px-3'>
                                        <p>
                                            <i className="fa-solid fa-star text-customRed mr-0.5"></i>
                                            {ShowDetails.vote_average.toFixed(1)}
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-solid fa-grip mr-1"></i>Gernes</span>
                            <div className='flex items-center gap-2 text-white text-[14px]'>
                                {ShowDetails.genres.map((genr) => {
                                    return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{genr.name}</p></span>)
                                })}
                            </div>
                        </div>
                        {TVKeyword && TVKeyword.length > 0 ?
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-solid fa-tag fa-rotate-90 mr-2"></i>Keywords</span>
                                <div className='grid grid-cols-2 gap-2 text-white text-[14px] truncate'>
                                    {TVKeyword.slice(0, 10).map((key) => {
                                        return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{key.name}</p></span>)
                                    })}

                                </div>
                            </div>
                            : ""}


                    </div>
                    {TVCast && TVCast.length > 0 ? <div className='bg-backColor p-4 mb-4 rounded-xl order-3'>
                        <h1 className='text-paragraf mb-4'>Cast</h1>
                        <div className="h-64 xl:h-60 2xl:h-76">
                            <Carousel className="Carousel w-full py-4" slide={true} indicators={false}>
                                {TVCast.filter(cast => cast.profile_path).map((cast, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-[150px] bg-backColor p-2 rounded-lg transition-transform duration-300 hover:scale-105">
                                        <img
                                            className="w-[100px] object-cover rounded-full mb-2"
                                            src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                                            alt={cast.name}
                                        />
                                        <h1 className="text-center text-white font-semibold text-sm">{cast.name}</h1>
                                        <p className="text-center text-gray-400 text-xs">{cast.character}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div> : ""}

                    {TVReview && TVReview.length > 0 ?
                        <div className='bg-backColor p-4 mb-4 rounded-xl order-4'>
                            <h1 className='text-paragraf mb-4'>Reviews</h1>
                            <div className="custom-carousel relative">
                                <Carousel className="Carousel w-full py-4" slide={false} leftControl={null} rightControl={null}>
                                    {TVReview.slice(0, 5).map((rev, index) => {
                                        return <>
                                            <div key={index} className='bg-[#0F0F0F] p-3'>
                                                <div className='p-6'>
                                                    <span className='flex justify-between items-center mb-4'>
                                                        <span>
                                                            <h1 className='text-white'>{rev.author}</h1>
                                                            <p className='text-paragraf text-sm'>{rev.created_at}</p>
                                                        </span>
                                                        {rev.author_details.rating ?
                                                            <span className='border-borderColor border-2 p-2 rounded-lg'>
                                                                <i className="fa-solid fa-star text-customRed mr-0.5"></i><span className='text-paragraf'>{rev.author_details.rating}</span>
                                                            </span> : ""}

                                                    </span>
                                                    <p className='text-paragraf line-clamp-4'>
                                                        {rev.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    })}
                                </Carousel>
                            </div>
                        </div> : ""}

                </div>
                <div className='col-span-2 '>
                    <div className='sm:max-lg:hidden bg-backColor p-4 rounded-xl'>
                        {ShowDetails.first_air_date ?
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-regular fa-calendar mr-1 "></i>Released Year</span>
                                <p className='text-white'>{ShowDetails.first_air_date}</p>
                            </div> : ""
                        }


                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-solid fa-language mr-1"></i>Available Languages</span>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 text-white text-[14px] '>
                                {ShowDetails.spoken_languages.map((lang) => {
                                    return (<div className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{lang.name}</p></div>)
                                })}

                            </div>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-regular fa-star mr-1"></i>Rating</span>
                            <div className='flex items-center gap-2 text-white text-[14px]'>
                                <span className='bg-[#141414] border-borderColor border-2 rounded-lg'>
                                    <div className='py-2 px-3'>
                                        <p>
                                            <i className="fa-solid fa-star text-customRed mr-0.5"></i>
                                            {ShowDetails.vote_average.toFixed(1)}
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-solid fa-grip mr-1"></i>Gernes</span>
                            <div className='flex lg:max-xl:flex-col lg:max-xl:items-start items-center gap-2 text-white text-[14px]'>
                                {ShowDetails.genres.map((genr) => {
                                    return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{genr.name}</p></span>)
                                })}
                            </div>
                        </div>
                        {TVKeyword && TVKeyword.length > 0 ?
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-solid fa-tag fa-rotate-90 mr-2"></i>Keywords</span>
                                <div className='grid grid-cols-2 lg:max-xl:grid-cols-1 gap-2 text-white text-[14px] truncate'>
                                    {TVKeyword.slice(0, 10).map((key) => {
                                        return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{key.name}</p></span>)
                                    })}

                                </div>
                            </div>
                            : ""}


                    </div>
                </div>
            </section>

            <FreeTrial />
        </>
            : <Loading />}



    </>
}
