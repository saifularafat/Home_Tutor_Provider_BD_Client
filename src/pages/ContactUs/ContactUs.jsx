import { Link } from 'react-router-dom';
import PageTitleShow from '../../Components/PageTitleShow/PageTitleShow';
import './../../Share/Footer/footer.css'
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const ContactUs = () => {
    return (
        <div className='bg-blue-100'>
            <div className="container mx-auto md:py-16 py-5">
                <PageTitleShow currentPage="Contact Us" />
                <div className='md:flex items-center justify-center md:gap-8 px-2 '>
                    <div className="w-full max-w-lg shadow-2xl shadow-blue-400 md:relative rounded-3xl md:px-10 px-5 md:pb-10 pb-6 md:pt-8 pt-4 md:mt-16 mt-6 dark:bg-zinc-900 border-sky-200 border-y">
                        <div className="md:my-6">
                            <h2 className="text-center text-3xl font-semibold tracking-tight">Contact Us</h2>
                            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                        </div>
                        <form className="w-full md:space-y-6 space-y-2 md:py-0 py-4">
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="h-10 w-full bg-white rounded-lg border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="name"
                                    placeholder="Your Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_email">
                                    Email
                                </label>
                                <input
                                    className="h-10 w-full bg-white rounded-lg border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="_email"
                                    placeholder="Your Email"
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_message">
                                    Message
                                </label>
                                <textarea
                                    className="min-h-[80px] w-full bg-white rounded-lg border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="_message"
                                    placeholder="what's in your mind"
                                    name="message"
                                />
                            </div>
                            <button type='submit' className="rounded-lg-md md:w-auto w-full bg-sky-400 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 rounded-lg duration-200">Submit</button>
                        </form>



                        <div className='md:absolute left-9 -top-20 grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-3 md:pt-0 pt-8'>
                            <div className='md:col-span-1 text-center w-full mx-auto bg-white rounded-lg shadow-xl py-6 px-2'>
                                <Link to="http://wa.me/+8801829537621" className=''>
                                    <FaWhatsapp className="text-[#25D147] w-8 h-12 mx-auto" />
                                    <span className='font-medium text-sm'>+088 01222 234 66</span>
                                </Link>
                            </div>
                            <div className='md:col-span-1 text-center w-full mx-auto bg-white rounded-lg shadow-xl py-6 px-2'>
                                <Link to="tel:+8801829537621" className=''>
                                    <FaPhoneVolume className="text-[#0369A1] w-8 h-12 mx-auto -rotate-45" />
                                    <span className='font-medium text-sm'>+088 01222 234 66</span>
                                </Link>
                            </div>
                            <div className='md:col-span-1 text-center w-full mx-auto bg-white rounded-lg shadow-xl py-6 px-2'>
                                <Link to="mailto:htprovider.info@gmail.com" className=''>
                                    <MdEmail className="text-[#EA4335] w-8 h-12 mx-auto" />
                                    <span className='font-medium text-xs'>htprovider@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactUs;