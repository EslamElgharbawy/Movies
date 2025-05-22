import image1 from '../../assets/images/Sub Container.png'
import GenresSliderMovie from "../../components/GenresSliderMovie/GenresSliderMovie";
import FreeTrial from "../../components/FreeTrial/FreeTrial";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Questions from '../../components/Questions/Questions';
export default function Home() {
  return <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Discover trending movies and TV shows with VibeCinema. Watch trailers, browse seasons and episodes, and dive into cast details and reviews." />
      <meta name="keywords" content="VibeCinema, movies, TV shows, trailers, episodes, cast, reviews, trending, TMDB" />
      <meta name="author" content="VibeCinema Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
    </Helmet>
    <main>
      <section className='relative xs:max-sm:mb-24 sm:mb-56 md:max-xl:mb-0' id="Home">
        <div className="relative w-full xs:max-xl:h-screen max-h-[100vh] overflow-hidden">
          <div className="fade-top fade-bottom relative w-full xs:h-4/6 sm:h-5/6 md:max-xl:h-4/6">
            <img
              src={image1}
              alt=""
              className="w-full h-full object-cover object-center xs:object-top"
            />
          </div>
        </div>

        <div className="absolute z-20 container p-4 text-white text-center bottom-10 sm:max-md:-bottom-20 md:max-lg:bottom-32 lg:max-xl:bottom-60 xl:-bottom-36  left-1/2 transform -translate-x-1/2">
          <h2 className='font-bold text-3xl sm:max-lg:text-4xl lg:text-5xl mb-5 xl:mb-8'>
            The Best Streaming Experience
          </h2>
          <p className='xs:max-xl:hidden text-sm max-w-5xl mx-auto mb-8 text-paragraf'>VibeCinema is the best streaming experience for watching your favorite movies and shows on demand, anytime,
            anywhere. With VibeCinema, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows,
            and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
          <p className='xl:hidden text-lg lg:max-xl:text-xl  max-w-5xl mx-auto mb-8 text-paragraf'>
            VibeCinema is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
          </p>

          <button className='px-10 py-3 rounded-lg bg-customRed hover:bg-red-700 transition-all duration-200' >
            <Link to={'/Movies'} className='flex justify-center items-center'>
              <i className="fa-solid fa-play text-white text-xl mr-2"></i><p className=' font-semibold text-sm'>Start Watching Now</p>
            </Link>
          </button>
        </div>
      </section>

      <section className='pb-36 xs:max-xl:mx-3' id="Categories">
        <div className='container mx-auto'>
          <div className='pb-16 flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-3xl  text-white mb-4'>Explore our wide variety of categories</h1>
              <p className='text-sm mx-auto text-paragraf'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
          </div>
          <GenresSliderMovie />
        </div>
      </section>


      <section className="pb-36 xs:max-xl:mx-3" id="Devices">
        <div className="xl:container xl:mx-auto ">
          <div className="pb-16">
            <h1 className='font-bold text-3xl  text-white mb-4'>We Provide you streaming experience across various devices.</h1>
            <p className='sm:max-xl:hidden text-sm max-w-5xl text-start text-paragraf'>
              With VibeCinema, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
            </p>
            <p className='xl:hidden mx-auto leading-relaxed text-paragraf'>With VibeCinema, you can enjoy your favorite movies and TV shows anytime, anywhere.</p>
          </div>
          <div className="grid sm:max-lg:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg" style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className=" w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-mobile-button p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">SmartPhones</h1>
              </div>
              <p className=" xl:text-sm mx-auto leading-relaxed text-paragraf">
                VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
              </p>
            </div>
            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg " style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className=" w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-tablet p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">Tablet</h1>
              </div>
              <p className="xl:text-sm mx-auto leading-relaxed text-paragraf">VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
            </div>
            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg " style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className=" w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-tv p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">Smart TV</h1>
              </div>
              <p className="xl:text-sm mx-auto leading-relaxed text-paragraf">VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
            </div>
            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg " style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className=" w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-laptop p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">Labtops</h1>
              </div>
              <p className="xl:text-sm mx-auto leading-relaxed text-paragraf">VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
            </div>
            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg " style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className=" w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-gamepad p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">Gaming Consoles</h1>
              </div>
              <p className="xl:text-sm mx-auto leading-relaxed text-paragraf">VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
            </div>
            <div className="p-9 rounded-lg border-borderColor border-2 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg " style={{ backgroundImage: "linear-gradient(to bottom left, rgba(100,0,0,0.2), rgba(0,0,0,1))" }}>
              <div className="flex items-center mb-4">
                <span className="w-16 mr-2 rounded-lg border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                  <i className="fa-solid fa-vr-cardboard p-3 text-customRed text-2xl left-1/2 transform -translate-x-1/2 relative"></i>
                </span>
                <h1 className="text-white font-semibold text-xl">VR Headsets</h1>
              </div>
              <p className="xl:text-sm mx-auto leading-relaxed text-paragraf" >VibeCinema is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
            </div>
          </div>
        </div>
      </section >

      <Questions />

      <section className=" pb-36 xs:max-xl:mx-3" id="subscription">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="pb-16">
              <h1 className="font-bold text-3xl  text-white mb-4">Choose the plan that's right for you</h1>
              <p className="text-sm text-paragraf" >Join VibeCinema and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
          </div>
          <div className="container grid lg:grid-cols-3 gap-4">
            <div className="rounded-lg border-borderColor border-2" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="p-8">
                <span className="mb-8 block">
                  <h1 className="font-bold mb-3 text-white">
                    Basic Plan
                  </h1>
                  <p className="text-paragraf" >Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                </span>
                <span className="flex items-end mb-8">
                  <h1 className="text-white font-bold text-3xl mr-1">$9.99</h1>
                  <span className='text-paragraf' >/month</span>
                </span>

                <span className="text-white ">
                  <button className="px-7 py-3 rounded-lg text-sm mr-3 border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                    <div>
                      <h1>Start Free Trial</h1>
                    </div>
                  </button>
                  <button className="px-7 py-3 rounded-lg text-sm bg-customRed hover:bg-red-700 transition-all duration-300 border-borderColor border-2" >
                    <div>
                      <h1>Choose Plan</h1>
                    </div>
                  </button>
                </span>
              </div>
            </div>

            <div className="rounded-lg border-2 border-borderColor " style={{ backgroundColor: "#1A1A1A" }}>
              <div className="p-8">
                <span className="mb-8 block">
                  <h1 className="font-bold mb-3 text-white">
                    Standard Plan
                  </h1>
                  <p className="text-paragraf">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                </span>
                <span className="flex items-end mb-8">
                  <h1 className="text-white font-bold text-3xl mr-1">$12.99</h1>
                  <span className='text-paragraf'>/month</span>
                </span>

                <span className="text-white ">
                  <button className="px-7 py-3 rounded-lg text-sm mr-3 border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                    <div>
                      <h1>Start Free Trial</h1>
                    </div>
                  </button>
                  <button className="px-7 py-3 rounded-lg text-sm bg-customRed hover:bg-red-700 transition-all duration-300 border-borderColor border-2" >
                    <div>
                      <h1>Choose Plan</h1>
                    </div>
                  </button>
                </span>
              </div>
            </div>

            <div className="rounded-lg border-borderColor border-2" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="p-8">
                <span className="mb-8 block">
                  <h1 className="font-bold mb-3 text-white">
                    Premium Plan
                  </h1>
                  <p className="text-paragraf">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                </span>
                <span className="flex items-end mb-8">
                  <h1 className="text-white font-bold text-3xl mr-1">$14.99</h1>
                  <span className='text-paragraf'>/month</span>
                </span>

                <span className="text-white">
                  <button className="px-7 py-3 rounded-lg text-sm mr-3 border-borderColor border-2" style={{ backgroundColor: "#141414" }}>
                    <div>
                      <h1>Start Free Trial</h1>
                    </div>
                  </button>
                  <button className="px-7 py-3 rounded-lg text-sm bg-customRed hover:bg-red-700 transition-all duration-300 border-borderColor border-2">
                    <div>
                      <h1>Choose Plan</h1>
                    </div>
                  </button>
                </span>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>


      </section>

      <FreeTrial />
    </main>
  </>
}
