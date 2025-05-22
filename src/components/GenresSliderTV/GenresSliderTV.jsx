import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export default function GenresSliderTV() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchGenresWithImages() {
            try {
                const genreRes = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                    }
                });

                const genreData = await genreRes.json();
                const genresWithImages = await Promise.all(
                    genreData.genres.map(async (genre) => {
                        const tvRes = await fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genre.id}&sort_by=popularity.desc&page=1`, {
                            headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                            }
                        });

                        const tvData = await tvRes.json();
                        const topShow = tvData.results[0];
                        const image = topShow ? topShow.poster_path : null;

                        return {
                            ...genre,
                            image: image ? `https://image.tmdb.org/t/p/original${image}` : null
                        };
                    })
                );

                setGenres(genresWithImages);
            } catch (error) {
                console.error('Error fetching genres with images:', error);
            }
        }

        fetchGenresWithImages();
    }, []);

    const chunkedGenres = genres.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / 5);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
    return <>
        <div className='container flex justify-center items-center gap-4'>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper category-swiper" >
                {
                    chunkedGenres.map((group, index) => (
                        <SwiperSlide key={index} >
                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {group.map((genre) => (
                                    <Link to={`/GenreShows/${genre.id}`}
                                        key={genre.id}
                                        className="bg-[#1A1A1A] border-2 border-[#262626] rounded-xl xs:max-md:p-2 md:p-4 cursor-pointer text-white shadow-md"
                                    >
                                        {genre.image ? (
                                            <span className='fadeShow-bottom relative'><img
                                                src={genre.image}
                                                alt={genre.name}
                                                className="rounded-lg w-full object-cover"
                                            /></span>
                                        ) : ""}
                                        <div className=" flex justify-between items-center text-white text-[16px] pt-2">
                                            <span>{genre.name}</span>
                                            <i className="fa-solid fa-arrow-right cursor-pointer"></i>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </div>

    </>
}
