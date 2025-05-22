import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';
import FreeTrial from '../../components/FreeTrial/FreeTrial';
import { Carousel } from 'flowbite-react';
export default function MovieDetails() {
    let [MovieDetails, setMovieDetails] = useState(null)
    let [Keyword, setKeyword] = useState([])
    let [Cast, setCast] = useState([])
    let [Review, setReview] = useState([])
    let [Video, setVideo] = useState([])
    let [isOpen, setisOpen] = useState(false)

    let { id } = useParams()
    function getMovieDetails() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setMovieDetails(res)
            })
            .catch(err => console.error(err));
    }
    function getKeywords() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/keywords`, options)
            .then(res => res.json())
            .then(res => {
                setKeyword(res.keywords)
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

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setCast(res.cast)
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

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                setReview(res.results)
            })
            .catch(err => console.error(err));
    }
    function getTrailerMovie() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                const trailer = res.results.find(video => video.type === "Trailer" && video.site === "YouTube");
                console.log(trailer);
                if (trailer) {
                    setVideo(trailer);
                }
            })
            .catch(err => console.error(err));
    };
    useEffect(() => {
        getMovieDetails(),
            getKeywords(),
            getCast(),
            getReviews(),
            getTrailerMovie()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [id])
    return <>
        {MovieDetails ? <>
            <section className='relative w-full xs:w-11/12 lg:w-10/12 mx-auto pb-20 lg:pb-36 pt-20 xs:pt-28 lg:pt-32'>
                <div className='relative w-full h-full sm:max-xl:h-[600px] xs:max-sm:h-[600px] rounded-xl '>
                    <div className='relative w-full h-full'>
                        <img src={`https://image.tmdb.org/t/p/original/${MovieDetails.backdrop_path}`} alt="" className='w-full h-full object-cover rounded-xl' />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />

                    </div>
                    <div className='absolute w-9/12 z-40 text-center bottom-16  left-1/2 transform -translate-x-1/2'>
                        <span className='mb-5 block'>
                            <h1 className='font-bold text-4xl text-white mb-2'>{MovieDetails.original_title}</h1>
                            <p className='line-clamp-2 text-paragraf'>
                                {MovieDetails.overview}
                            </p>
                        </span>
                        <div className='lg:flex justify-center items-center lg:flex-wrap lg:gap-4'>
                            <button
                                onClick={() => { setisOpen(true) }}
                                className='xs:max-lg:w-full xs:max-lg:mb-5 bg-customRed hover:bg-red-700 transition-all duration-300 px-5 py-3 rounded-lg text-white flex justify-center items-center text-sm font-semibold'>
                                <i className="fa-solid fa-play mr-2"></i>
                                Play Trailer
                            </button>
                            <span className='flex justify-center items-center gap-4'>
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
                <div className='lg:col-span-3 flex flex-col'>
                    <div className='bg-backColor p-4 mb-4 rounded-xl order-1 '>
                        <h1 className='text-paragraf mb-2'>Description</h1>
                        <p className='text-white lg:text-sm'>{MovieDetails.overview}</p>
                    </div>
                    <div className='lg:hidden mb-4 lg:col-span-2 flex flex-col order-2'>
                        <div className='bg-backColor p-4 rounded-xl order-2 lg:order-2 '>
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-regular fa-calendar mr-1 "></i>Released Year</span>
                                <p className='text-white'>{MovieDetails.release_date}</p>
                            </div>

                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i className="fa-solid fa-language mr-1"></i>Available Languages</span>
                                <div className='flex items-center gap-2 text-white text-[14px]'>
                                    {MovieDetails.spoken_languages.map((lang) => {
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
                                                {MovieDetails.vote_average.toFixed(1)}
                                            </p>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i class="fa-solid fa-grip mr-1"></i>Gernes</span>
                                <div className='flex items-center gap-2 text-white text-[14px]'>
                                    {MovieDetails.genres.map((genr) => {
                                        return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{genr.name}</p></span>)
                                    })}
                                </div>
                            </div>
                            {Keyword && Review.length > 0 ?
                                <div className='mb-5'>
                                    <span className='text-paragraf mb-2 block'><i class="fa-solid fa-tag fa-rotate-90 mr-2"></i>Keywords</span>
                                    <div className='grid grid-cols-2 lg:max-xl:grid-cols-1 gap-2 text-white text-[14px] truncate'>
                                        {Keyword.slice(0, 10).map((key) => {
                                            return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{key.name}</p></span>)
                                        })}

                                    </div>
                                </div>
                                : ""}


                        </div>
                    </div>

                    <div className='bg-backColor p-4 mb-4 rounded-xl order-3 '>
                        <h1 className='text-paragraf mb-4'>Cast</h1>
                        <div className="h-64 xl:h-60 2xl:h-76">
                            <Carousel className="Carousel w-full py-4" slide={true} indicators={false}>
                                {Cast.filter(cast => cast.profile_path).map((cast, index) => (
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




                    </div>

                    {Review && Review.length > 0 ?
                        <div className='bg-backColor p-4 mb-4 rounded-xl order-4'>
                            <h1 className='text-paragraf mb-4'>Reviews</h1>
                            <div className="custom-carousel relative">
                                <Carousel className="Carousel w-full py-4" slide={false} leftControl={null} rightControl={null} style={{}}>
                                    {Review.slice(0, 5).map((rev, index) => {
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

                <div className='sm:max-lg:hidden lg:col-span-2 flex flex-col '>
                    <div className='bg-backColor p-4 rounded-xl order-2 lg:order-2 '>
                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-regular fa-calendar mr-1 "></i>Released Year</span>
                            <p className='text-white'>{MovieDetails.release_date}</p>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i className="fa-solid fa-language mr-1"></i>Available Languages</span>
                            <div className='flex items-center gap-2 text-white text-[14px]'>
                                {MovieDetails.spoken_languages.map((lang) => {
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
                                            {MovieDetails.vote_average.toFixed(1)}
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <span className='text-paragraf mb-2 block'><i class="fa-solid fa-grip mr-1"></i>Gernes</span>
                            <div className='flex lg:max-xl:flex-col lg:max-xl:items-start gap-2 text-white text-[14px]'>
                                {MovieDetails.genres.map((genr) => {
                                    return (<span className='bg-[#141414] border-borderColor border-2 rounded-lg'><p className='py-2 px-3'>{genr.name}</p></span>)
                                })}
                            </div>
                        </div>
                        {Keyword && Review.length > 0 ?
                            <div className='mb-5'>
                                <span className='text-paragraf mb-2 block'><i class="fa-solid fa-tag fa-rotate-90 mr-2"></i>Keywords</span>
                                <div className='grid lg:max-xl:grid-cols-1 grid-cols-2 gap-2 text-white text-[14px] truncate'>
                                    {Keyword.slice(0, 10).map((key) => {
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
