import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css'
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import tutor from "./../../../../assets/premium/tutor1.jpg"
import tutor2 from "./../../../../assets/premium/tutor2.jpg"
import tutor3 from "./../../../../assets/premium/tutor3.jpg"
import tutor4 from "./../../../../assets/premium/tutor4.jpg"

const RecommendationTutor = () => {
    const id = useParams();
    return (
        <div className="py-3 md:py-5 px-2 md:px-5 rounded-md bg-white md:space-y-6 space-y-3">
            <h2 className="text-2xl font-bold text-slate-700">Recommendation Tutors</h2>

            <div className=' mx-auto'>
                <div className='p-1 pt-1'>
                    <Swiper
                        freeMode={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            },
                            1270: {
                                slidesPerView: 4,
                                spaceBetween: 50
                            }
                        }}
                        modules={[FreeMode, Pagination]}
                        className='mySwiper'
                    >
                        {/* slider 01 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-8 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 02 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-2 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor2} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 03 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-2 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor3} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 04 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-2 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor4} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 05 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-2 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor2} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 06 */}
                        <SwiperSlide>
                            <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-56 mb-2 py-4">
                                <div className="flex justify-center">
                                    <img
                                        width={110}
                                        height={110}
                                        className="h-[60px] w-[60px] rounded-full bg-slate-500 object-cover"
                                        src={tutor} alt="Tutor photo" />
                                </div>
                                <div className="text-center flex-grow space-y-1">
                                    <h1 className="text-lg text-gray-700 font-semibold capitalize">Nullify ullify</h1>
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaLocationDot className='text-slate-500 text-sm' />
                                        <p className='text-sm font-medium text-slate-600'>Dhaka</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={`/tutor-details/${id}`}
                                        className="rounded-full tracking-wide py-[5px] px-[10px] text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex items-end justify-end py-1'>
                        <Link to="/tutor-profile" className='text-sm font-medium tracking-wide capitalize py-1 px-3 bg-blue-500 text-white rounded-lg'>
                            see more
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RecommendationTutor;