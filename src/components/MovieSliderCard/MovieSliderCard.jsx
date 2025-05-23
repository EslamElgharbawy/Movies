export default function MovieSliderCard({ MovieInfo }) {
    let { title, backdrop_path, overview } = MovieInfo
    return <>
        <div className="relative w-full h-full sm:max-xl:h-[600px] xs:max-sm:h-[500px] rounded-xl ">
            <div className="relative w-full h-full">
                <img
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={title}
                    className="w-full h-full object-cover"
                    
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />
            </div>

            <div className="absolute w-11/12 sm:w-9/12 z-50 text-center bottom-10 sm:bottom-14 left-1/2 transform -translate-x-1/2 px-2">
                <h1 className="font-bold text-2xl sm:text-3xl text-white mb-3 sm:max-lg:mb-3">{title}</h1>
                <p className="text-sm sm:text-base text-paragraf mb-5 line-clamp-3 sm:max-lg:line-clamp-2">
                    {overview}
                </p>
            </div>
        </div>
    </>
}
