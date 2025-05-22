import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../Loading/Loading';
import MovieSliderCard from '../MovieSliderCard/MovieSliderCard';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
export default function MovieSlider() {
    let [movies, setmovies] = useState([])
    function getMovies() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                setmovies(res.results)
            })
            .catch(err => console.error(err));

    }
    useEffect(() => {
        getMovies(),
            window.scrollTo({ top: 0, behavior: "smooth" })

    }, [])
    return <>
        {movies ?
            <section className="relative w-full xs:w-11/12 lg:w-10/12 mx-auto pb-36 pt-20 xs:pt-28 lg:pt-32">
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="mySwiper rounded-xl"
                >
                    {movies.slice(0, 5).map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieSliderCard
                                MovieInfo={movie}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            : <Loading />}

    </>
}
