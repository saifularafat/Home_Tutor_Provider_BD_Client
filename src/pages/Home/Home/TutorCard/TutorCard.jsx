import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css'
import user1 from "./../../../../assets/premium/tutor1.jpg"
import './tutorCard.css'
import { FaLocationDot } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle'

const TutorCard = () => {
    const { id } = useParams()
    return (
        <div className='container mx-auto  my-6'>
            <SectionTitle sectionName="All Tutors" />
            <div className='p-5 pt-9'>
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
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-slate-300 rounded-xl flex flex-col space-y-2 w-96 h-80 mb-7 p-5">
                            <div className="flex justify-center">
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                    src={user1} alt="Tutor photo" />
                            </div>
                            <div className="text-center flex-grow space-y-2">
                                <h1 className="text-2xl text-gray-700 font-bold capitalize">Nullify ullify</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <FaLocationDot className='text-slate-500' />
                                    <p className='text-base font-medium text-slate-600'>Dhaka</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link
                                    to={`/tutor-details/${id}`}
                                    className="rounded-full tracking-wide py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
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
    );
};

export default TutorCard;