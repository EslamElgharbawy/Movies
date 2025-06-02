import { use, useEffect, useState } from "react";

export default function ScrollToTopButton() {
    let [show, setshow] = useState(false)
    function ButtonScroll() {
        const timeout = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        });

        return () => clearTimeout(timeout)
    }
    useEffect(() => {
        function hideButton() {
            if (window.scrollY > 200) {
                setshow(true)
            } else {
                setshow(false)
            }
        }
        window.addEventListener("scroll", hideButton);

        return () => window.removeEventListener("scroll", hideButton);

    })


    return <>
        {show && <button
            onClick={() => {
                ButtonScroll()
            }}

            className="fixed  py-3 px-5 rounded-full bg-customRed z-50 xs:text-xl xl:text-2xl bottom-10 xs:max-xl:right-8 xl:right-10">
            <i class="fa-solid fa-arrow-up text-white"></i>
        </button>}
    </>
}
