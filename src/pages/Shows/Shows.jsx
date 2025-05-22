import React from 'react'
import TrendingShow from '../../components/TrendingShow/TrendingShow'
import FreeTrial from '../../components/FreeTrial/FreeTrial'
import AiringToday from '../../components/AiringToday/AiringToday'
import TopRatedShow from '../../components/TopRatedShow/TopRatedShow'
import { Helmet } from 'react-helmet'
import GenresSliderTV from '../../components/GenresSliderTV/GenresSliderTV'

export default function Shows() {
  return <>
    <Helmet>
      <title>Shows</title>
      <meta name="description" content="Discover trending TV shows and all-time favorite series on VibeCinema. Explore drama, comedy, thrillers, and more with detailed information and high-quality streaming." />
      <meta name="keywords" content="TV shows, watch series, latest shows, popular TV series, 2025 shows, VibeCinema, streaming shows, drama series, comedy series, thrillers, top TV shows" />
    </Helmet>
    <section className=" relative mx-auto rounded-lg border-2 border-[#262626] pb-5 mb-16 mt-36 w-11/12">
      <div className="absolute bg-customRed px-5 py-2 text-white rounded-lg w-fit left-6 -top-5">
        <h1>Shows</h1>
      </div>
      <div className="container xs:max-xl:px-3 xl:ps-14">
        <div className="mb-10" id="genresShow">
          <span >
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Our Genres</h1>
          </span>
          <GenresSliderTV />
        </div>

        <div className="mb-10" id="TrandingShow">
          <span >
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Trending Shows Now</h1>
          </span>
          <TrendingShow />
        </div>

        <div className="mb-10" id="AiringToday">
          <span >
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Airing Today</h1>
          </span>
          <AiringToday />
        </div>

        <div className="mb-10" id="AiringToday">
          <span >
            <h1 className="font-bold text-white text-3xl py-12 xs:max-lg:text-center">Must - Watch Shows</h1>
          </span>
          <TopRatedShow />
        </div>
      </div>
    </section>

    <FreeTrial />
  </>
}
