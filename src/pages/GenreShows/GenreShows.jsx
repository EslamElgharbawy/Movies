import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TrendingShowCard from "../../components/TrendingShowCard/TrendingShowCard";

export default function GenreShows() {
    const [Recommend, setRecommend] = useState([]);
    const { id } = useParams();
    function getShowsByGenre() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res.results);
                setRecommend(res.results);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getShowsByGenre();
    }, [id]);

    return <>
        {Recommend[0] && (
            <section className='relative w-full xs:w-11/12 lg:w-10/12 mx-auto pb-36 pt-20 xs:pt-28 lg:pt-32'>
                <div className='relative w-full h-full sm:max-xl:h-[600px] xs:max-sm:h-[500px] rounded-xl'>
                    <div className='relative w-full h-full '>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${Recommend[0].backdrop_path}`}
                            alt={Recommend[0].name}
                            className='w-full h-full object-cover rounded-xl'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />

                    </div>
                    <div className='absolute w-9/12 z-40 text-center bottom-16 left-1/2 transform -translate-x-1/2'>
                        <span className='mb-5 block'>
                            <h1 className='font-bold text-4xl text-white mb-2'>{Recommend[0].name}</h1>
                            <p className='line-clamp-2 text-paragraf'>{Recommend[0].overview}</p>
                        </span>
                    </div>
                </div>
            </section>
        )}

        <section className='lg:w-10/12 mx-3 lg:mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-20'>
            {Recommend.map((rec) => {
                return (<TrendingShowCard key={rec.id} Rated={rec} />)
            })}
        </section>

    </>
}
