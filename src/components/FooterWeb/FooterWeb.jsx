"use client";

import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function FooterWeb() {
  return (
    <footer className="bg-[#0F0F0F] font-Manrope">
  <div className="w-full mx-auto max-w-screen-xl px-6 sm:py-8">
    
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-8 border-b border-gray-200 border-opacity-10 pb-8">
      
      <div>
        <h2 className="text-white mb-4 font-semibold">Home</h2>
        <ul className="space-y-2 text-paragraf">
          <li><a href="#">Categories</a></li>
          <li><a href="#">Devices</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-white mb-4 font-semibold">Movies</h2>
        <ul className="space-y-2 text-paragraf">
          <li><a href="#">Now Playing</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Top Rated</a></li>
          <li><a href="#">Upcoming</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-white mb-4 font-semibold">Shows</h2>
        <ul className="space-y-2 text-paragraf">
          <li><a href="#">Now Playing</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Top Rated</a></li>
          <li><a href="#">Upcoming</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-white mb-4 font-semibold">Support</h2>
        <ul className="space-y-2 text-paragraf">
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-white mb-4 font-semibold">Connect With Us</h2>
        <div className="flex justify-start sm:justify-center lg:justify-start space-x-4 mt-4">
          <a href="#" className="p-3 rounded-md bg-backColor border-borderColor border-2">
            <BsFacebook className="text-white" size={24} />
          </a>
          <a href="#" className="p-3 rounded-md bg-backColor border-borderColor border-2">
            <BsTwitter className="text-white" size={24} />
          </a>
          <a href="#" className="p-3 rounded-md bg-backColor border-borderColor border-2">
            <BsLinkedin className="text-white" size={24} />
          </a>
        </div>
      </div>

    </div>

    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-paragraf text-sm">
      <span className="text-center sm:text-left">© 2025 VibeCinema. All Rights Reserved.</span>
      <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 space-x-4">
        <a href="#">Terms of Use</a>
        <a href="#" className="border-borderColor border-x-2 px-3">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>

  </div>
</footer>

  );
}
