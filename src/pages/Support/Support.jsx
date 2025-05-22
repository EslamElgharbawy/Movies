import FreeTrial from '../../components/FreeTrial/FreeTrial'
import Supportimg from '../../assets/images/Support.png'
import Questions from '../../components/Questions/Questions';
import { Checkbox, Label } from "flowbite-react";
import { Helmet } from 'react-helmet';
export default function Support() {
    return <>
        <Helmet>
            <title>Support</title>
            <meta name="description" content="Need help? Contact VibeCinema Support for assistance with your account, streaming issues, or any other questions. We're here to help 24/7." />
            <meta name="keywords" content="VibeCinema support, customer service, help center, streaming help, account issues, contact support, FAQ" />
        </Helmet>
        <section className='pt-32 pb-20 flex justify-center items-center'>
            <div className='container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10 sm:max-md:px-0 px-5'>
                <div className='text-center xl:text-left'>
                    <h1 className='font-bold text-3xl text-white mb-4'>Welcome to our support page!</h1>
                    <p className='text-paragraf mb-6'>
                        We're here to help you with any problems you may be having with our product.
                    </p>

                    <div className='border-borderColor border-4 rounded-lg max-w-md mx-auto xl:mx-0'>
                        <img src={Supportimg} alt="Support" className='rounded-lg w-full' />
                    </div>
                </div>

                <div className='xl:col-span-2 border-[#262626] border-2 rounded-lg bg-[#121212]'>
                    <form className="w-full flex flex-col gap-6 p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <Label className="text-white text-base mb-2" htmlFor="first">First Name</Label>
                                <input className="bg-transparent border-2 border-[#262626] rounded-lg p-3 placeholder:text-paragraf focus:border-white text-white" id="first" type="text" placeholder="Enter First Name" />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-white text-base mb-2" htmlFor="last">Last Name</Label>
                                <input className="bg-transparent border-2 border-[#262626] rounded-lg p-3 placeholder:text-paragraf focus:border-white text-white" id="last" type="text" placeholder="Enter Last Name" />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-white text-base mb-2" htmlFor="email">Your email</Label>
                                <input className="bg-transparent border-2 border-[#262626] rounded-lg p-3 placeholder:text-paragraf focus:border-white text-white" id="email" type="email" placeholder="Enter Your Email" />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-white text-base mb-2" htmlFor="phone">Your Phone</Label>
                                <input className="bg-transparent border-2 border-[#262626] rounded-lg p-3 placeholder:text-paragraf focus:border-white text-white" id="phone" type="text" placeholder="Enter Your Phone" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <Label className="text-white text-base mb-2" htmlFor="message">Your message</Label>
                            <textarea className="bg-transparent border-2 border-[#262626] rounded-lg p-3 placeholder:text-paragraf focus:border-white text-white" id="message" placeholder="Enter Your Message" rows={4} />
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <Checkbox id="agree" />
                                <Label htmlFor="agree" className="text-white text-base flex flex-wrap">
                                    I agree with the&nbsp;
                                    <a href="#" className="text-cyan-600 hover:underline">terms and conditions</a>
                                </Label>
                            </div>
                            <button type="submit" className="bg-customRed hover:bg-red-700 transition-all duration-200 px-6 py-3 rounded text-sm text-white">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <Questions />
        <FreeTrial />
    </>
}
