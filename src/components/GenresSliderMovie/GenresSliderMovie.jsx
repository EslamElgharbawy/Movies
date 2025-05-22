import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import RecommendCard from '../RecommendCard/RecommendCard';

export default function GenresSliderMovie() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchGenresWithImages() {
            try {
                const genreRes = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                    }
                });

                const genreData = await genreRes.json();

                const genresWithImages = await Promise.all(
                    genreData.genres.map(async (genre) => {
                        const movieRes = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&page=1&sort_by=popularity.desc`, {
                            headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                            }
                        });

                        const movieData = await movieRes.json();
                        const topMovie = movieData.results[0];
                        const image = topMovie ? topMovie.poster_path : null;
                        return {
                            ...genre,
                            image: image ? `https://image.tmdb.org/t/p/w500${image}` : null
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
                className="mySwiper category-swiper"
            >
                {
                    chunkedGenres.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {group.map((genre) => <>
                                    {genre.image ? <>
                                        <RecommendCard key={genre.id} Recommendation={genre}/>
                                    </> : null}
                                </>)}
                            </div >
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
    
}
