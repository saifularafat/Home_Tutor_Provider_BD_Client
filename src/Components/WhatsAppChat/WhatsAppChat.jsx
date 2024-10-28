import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatsAppChat = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='z-[999999999px]'>
            <div className='fixed -right-2 bottom-1 md:bottom-5 md:right-4'>
                <button onClick={() => setOpenModal(true)} className="rounded-tr-3xl rounded-tl-3xl rounded-br-3xl bg-slate-50">
                    <FaWhatsapp
                        className='transition-all w-10 h-10 md:h-20 md:w-20 text-[#25D147] hover:scale-105'
                        alt=''
                    />
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[999999999px] w-screen ${openModal ? 'visible opacity-100 z-[999999999px]' : 'invisible opacity-0 z-[999999999px]'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                    <div onClick={(e_) => e_.stopPropagation()}
                        className={`absolute right-0 translate-y-1/2 mr-5 max-w-md rounded-lg bg-white md:p-6 p-3 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}
                    >
                        <svg onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                        <div className="text-center z-[999999999px]">
                            <p>Welcome to </p>
                            <h1 className="md:mb-2 mb-1 md:text-2xl text-xl font-semibold">H-TutorProvider<sup className="text-green-400">B<span className="text-red-400">D</span></sup></h1>
                            <p className="md:mb-5 mb-3 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                            <Link to="">
                                <FaWhatsapp
                                    className='transition-all w-8 h-8 md:h-16 md:w-16 text-[#25D147]'
                                    alt=''
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default WhatsAppChat;