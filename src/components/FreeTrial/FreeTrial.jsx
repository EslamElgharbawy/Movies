import backgroundImg from '../../assets/images/Background Images.png';
export default function FreeTrial() {
  return <>
    <section className="xs:max-xl:mx-3 pb-24">
  <div
    className="container mx-auto rounded-lg border-borderColor border-2 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImg})` }}
  >
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0 p-6 lg:p-24">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-white mb-4">
          Start your free trial today!
        </h1>
        <p className="text-paragraf text-sm sm:text-base">
          This is a clear and concise call to action that encourages users to sign up for a free trial of VibeCinema.
        </p>
      </div>
      <button className="px-5 py-4 rounded-lg text-white text-sm font-semibold bg-customRed hover:bg-red-700 transition-all duration-300">
        Start a Free Trial
      </button>
    </div>
  </div>
</section>


  </>
}
