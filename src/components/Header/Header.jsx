"use client";
import logo from '/src/assets/images/Vector.png'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent xl:container xl:mx-auto px-5 lg:px-8 py-5">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            className="h-8 sm:h-10 lg:h-12"
            alt="VibeCinema Logo"
          />
          <span className="font-Righteous text-2xl text-white">
            VibeCinema
          </span>
        </div>

        <div>
          <div className="hidden lg:flex items-center mx-auto xl:pr-20">
            <nav className="flex bg-[#0F0F0F] border-2 border-[#1F1F1F] rounded-xl px-4 py-5">
              <ul className="flex gap-6 items-center text-[15px]">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-paragraf py-3 px-4 rounded-lg ${isActive
                        ? "bg-gray-300 bg-opacity-10 transition-all duration-300 text-white"
                        : "text-gray-400"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Movies"
                    className={({ isActive }) =>
                      `text-paragraf py-3 px-4 rounded-lg ${isActive
                        ? "bg-gray-300 bg-opacity-10 transition-all duration-300 text-white"
                        : "text-gray-400"
                      }`
                    }
                  >
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Shows"
                    className={({ isActive }) =>
                      `text-paragraf py-3 px-4 rounded-lg ${isActive
                        ? "bg-gray-300 bg-opacity-10 transition-all duration-300 text-white"
                        : "text-gray-400"
                      }`
                    }
                  >
                    Shows
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Support"
                    className={({ isActive }) =>
                      `text-paragraf py-3 px-4 rounded-lg ${isActive
                        ? "bg-gray-300 bg-opacity-10 transition-all duration-300 text-white"
                        : "text-gray-400"
                      }`
                    }
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-4 lg:hidden">
            <div className="flex items-center gap-6 text-white xs:text-xl lg:text-2xl">
              <i className="fa-solid fa-magnifying-glass cursor-pointer"
                onClick={() => setShowSearch(true)}></i>
              {showSearch && (
                <>
                  <div
                    onClick={() => setShowSearch(false)}
                    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300"
                  />

                  <div className="absolute inset-0 z-50 flex justify-center w-full h-fit px-4 mt-10">
                    <div className="relative w-full max-w-2xl bg-backColor p-6 rounded-2xl shadow-2xl border-2 border-borderColor animate-fade-in">

                      <div className="flex justify-center items-center mb-4">
                        <h2 className="text-white text-2xl font-semibold m-2 ">Search Movies & Shows</h2>
                        <div className="flex ms-auto text-white rounded-lg bg-[#1A1A1A] border-borderColor border-4 w-fit">
                          <button onClick={() => {
                            setShowSearch(false);
                            setSearchTerm("");
                            setResults([]);
                          }} className="bg-[#1A1A1A] p-2 rounded-lg">
                            <HiOutlineX size={24} />
                          </button>
                        </div>
                      </div>

                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Type something..."
                        className="Search w-full bg-[#0F0F0F] text-white p-4 rounded-xl border-borderColor border-2 outline-none focus:border-customRed focus:ring-1 focus:ring-customRed transition-all duration-300 placeholder:text-paragraf"
                        onKeyDown={(e) => {
                          if (searchTerm.trim() !== "") {
                            const options = {
                              method: 'GET',
                              headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                              }
                            };

                            fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options)
                              .then(res => res.json())
                              .then(res => {
                                setResults(res.results)
                              })
                              .catch(err => console.error(err));
                          }
                        }}
                      />

                      {results.length > 0 ? (
                        <div className="container grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
                          {results.map((item) => {
                            return <>
                              {item.poster_path &&
                                <Link to={`/${item.media_type === 'movie' ? 'MovieDetails' : 'ShowDetails'}/${item.id}`} onClick={() => {
                                  setShowSearch(false)
                                  setSearchTerm("");
                                  setResults([]);
                                }} className='bg-[#1A1A1A] rounded-lg cursor-pointer'>
                                  <div className='p-2 lg:p-4'>
                                    <span>
                                      <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" className='w-full object-cover rounded-lg' />
                                    </span>
                                    <div className="flex flex-col lg:flex-row justify-between items-start xs:items-center gap-2 mt-4">
                                      <span className="bg-[#141414] border-[#262626] p-2 rounded-3xl text-sm lg:text-xs truncate w-fit">
                                        <p className="flex items-center text-[#999999] ">
                                          <i className="fa-solid fa-film mr-1"></i>
                                          <div className="line-clamp-1">
                                            {item.title?.split(' ').slice(0, 3).join(' ') || item.name?.split(' ').slice(0, 3).join(' ') || item.original_title?.split(' ').slice(0, 3).join(' ') || item.original_name?.split(' ').slice(0, 3).join(' ') || "No Title"}
                                          </div>
                                        </p>
                                      </span>

                                      <span className="bg-[#141414] border-borderColor p-2 rounded-3xl text-sm lg:text-xs truncate w-fit">
                                        <p className="text-paragraf">
                                          <i className="fa-solid fa-star text-customRed mr-1"></i>
                                          {item.vote_average}
                                        </p>
                                      </span>
                                    </div>

                                  </div>
                                </Link>
                              }
                            </>
                          })}
                        </div>
                      ) : ""}
                    </div>
                  </div>
                </>
              )}
              <i className="fa-regular fa-bell cursor-pointer"></i>
            </div>

            <div className="lg:hidden flex items-center text-white rounded-lg bg-[#1A1A1A] border-borderColor border-4">
              <button onClick={() => setIsOpen(!isOpen)} className="p-3">
                <HiOutlineMenuAlt3 size={28} />
              </button>
            </div>

          </div>
        </div>
        <div className="flex items-center gap-6 text-white sm:text-xl lg:text-2xl xs:max-lg:hidden">
          <i className="fa-solid fa-magnifying-glass cursor-pointer"
            onClick={() => setShowSearch(true)}></i>
          {showSearch && (
            <>
              <div
                onClick={() => setShowSearch(false)}
                className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300"
              />

              <div className="absolute inset-0 z-50 flex justify-center w-full h-fit px-4 mt-10">
                <div className="relative w-full max-w-2xl bg-backColor p-6 rounded-2xl shadow-2xl border-2 border-borderColor animate-fade-in">

                  <div className="flex justify-center items-center mb-4">
                    <h2 className="text-white text-2xl font-semibold m-2 ">Search Movies & Shows</h2>
                    <div className="flex ms-auto text-white rounded-lg bg-[#1A1A1A] border-borderColor border-4 w-fit">
                      <button onClick={() => {
                        setShowSearch(false);
                        setSearchTerm("");
                        setResults([]);
                      }} className="bg-[#1A1A1A] p-2 rounded-lg">
                        <HiOutlineX size={24} />
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type something..."
                    className="Search w-full bg-[#0F0F0F] text-white p-4 rounded-xl border-borderColor border-2 outline-none focus:border-customRed focus:ring-1 focus:ring-customRed transition-all duration-300 placeholder:text-paragraf"
                    onKeyDown={(e) => {
                      if (searchTerm.trim() !== "") {
                        const options = {
                          method: 'GET',
                          headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
                          }
                        };

                        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options)
                          .then(res => res.json())
                          .then(res => {
                            console.log(res.results)
                            setResults(res.results)
                          })
                          .catch(err => console.error(err));
                      }

                    }}
                  />

                  {results.length > 0 ? (
                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                      {results.map((item) => {
                        return <>
                          {item.poster_path &&
                            <Link to={`/${item.media_type === 'movie' ? 'MovieDetails' : 'ShowDetails'}/${item.id}`} onClick={() => {
                              setShowSearch(false)
                              setSearchTerm("");
                              setResults([]);
                            }} className='bg-[#1A1A1A] rounded-lg cursor-pointer'>

                              <div className='p-2 lg:p-4'>
                                <span>
                                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" className='w-full object-cover rounded-lg' />
                                </span>
                                <div className="flex flex-col justify-between items-start sm:items-center gap-2 mt-4">
                                  <div className="bg-[#141414] border-[#262626] p-2 rounded-3xl text-sm lg:text-xs truncate w-fit">
                                    <div className="flex items-center text-[#999999] ">
                                      <i className="fa-solid fa-film mr-1"></i>
                                      <span className="line-clamp-1">
                                        {item.original_title || item.original_name }
                                      </span>
                                    </div>
                                  </div>

                                  <span className="bg-[#141414] border-borderColor p-2 rounded-3xl text-sm lg:text-xs truncate w-fit">
                                    <p className="text-paragraf">
                                      <i className="fa-solid fa-star text-customRed mr-1"></i>
                                      {item.vote_average}
                                    </p>
                                  </span>
                                </div>

                              </div>
                            </Link>}

                        </>
                      })}
                    </div>
                  ) : ""}
                </div>
              </div>
            </>
          )}

          <i className="fa-regular fa-bell cursor-pointer"></i>
        </div>
      </div>

      {
        isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          />
        )
      }

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#0F0F0F] text-white z-50 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex ms-auto m-5 text-white rounded-lg bg-[#1A1A1A] border-borderColor border-4 w-fit">
          <button onClick={() => setIsOpen(false)} className="bg-[#1A1A1A] p-2 rounded-lg">
            <HiOutlineX size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 text-base mt-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-customRed transition-all duration-200 text-paragraf"
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            onClick={() => setIsOpen(false)}
            className="hover:text-customRed transition-all duration-200 text-paragraf"
          >
            Movies
          </NavLink>
          <NavLink
            to="/shows"
            onClick={() => setIsOpen(false)}
            className="hover:text-customRed transition-all duration-200 text-paragraf"
          >
            Shows
          </NavLink>
          <NavLink
            to="/support"
            onClick={() => setIsOpen(false)}
            className="hover:text-customRed transition-all duration-200 text-paragraf"
          >
            Support
          </NavLink>

        </nav>
      </div>

    </header >
  );
}
