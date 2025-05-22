import { useEffect } from "react";
import FreeTrial from "../../components/FreeTrial/FreeTrial";
import GenresSliderMovie from "../../components/GenresSliderMovie/GenresSliderMovie";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import TopRatedMovie from "../../components/TopRatedMovie/TopRatedMovie";
import TrendingMovie from "../../components/TrendingMovie/TrendingMovie";
import UpComingMovie from "../../components/UpComingMovie/UpComingMovie";
import { Helmet } from "react-helmet";

export default function Movies() {

  return <>
    <Helmet>
      <title>Movies</title>
      <meta name="description" content="Browse a huge collection of the latest and greatest movies on VibeCinema. Discover action, comedy, drama, and more in high quality with full details." />
      <meta name="keywords" content="movies, watch movies, latest movies, 2025 movies, Arabic movies, English movies, VibeCinema, stream movies, top movies, action, drama, comedy, romance" />
    </Helmet>
    <MovieSlider />

    <section className=" relative mx-auto rounded-lg border-2 border-borderColor pb-10 mb-16 w-11/12">
      <div className="absolute bg-customRed px-5 py-2 text-white rounded-lg w-fit left-6 -top-5">
        <h1>Movies</h1>
      </div>
      <div className="container xs:max-xl:px-3 xl:ps-14 ">
        <div className="mb-10" id="genres">
          <span>
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Our Genres</h1>
          </span>
          <GenresSliderMovie />
        </div>

        <div className="mb-10" id="Trending">
          <span>
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Trending Now</h1>
          </span>

          <TrendingMovie />
        </div>

        <div className="mb-10" id="Releases">
          <span>
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">New Releases</h1>
          </span>

          <UpComingMovie />
        </div>

        <div id="Must-Watch">
          <span>
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Must - Watch Movies</h1>
          </span>

          <TopRatedMovie />
        </div>
      </div>
    </section>

    <FreeTrial />
  </>
}


