import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterWeb from "../FooterWeb/FooterWeb";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
    return <>
        <Header />
        <div className="container max-w-[1580px] min-h-[60vh] mx-auto font-Manrope" style={{backgroundColor:"#141414"}}>
        <ScrollToTop />
            <Outlet />

        </div>
        <FooterWeb />
    </>
}
