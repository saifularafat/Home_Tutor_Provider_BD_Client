import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css'
import user1 from "./../../../../assets/premium/tutor1.jpg"
import './tutorCard.css'
import { FaLocationDot } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'

const TutorCard = () => {
    const { id } = useParams()
    return (
        <div className='p-5 my-20 '>
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
                {/* <SwiperSlide>
                    <div className="shadow-xl border  card w-96 -z-10 h-80 mb-7">
                        <figure className="pt-5 pb-2">
                            <img
                                className='mx-auto -z-10'
                                style={{ height: '150px', width: '150px', objectFit: 'cover', borderRadius: '30%' }}
                                src={user1}
                                alt="tutor photo" />
                        </figure>
                        <div className='items-center text-center -z-10 px-10'>
                            <p className='py-2 text-2xl font-bold'>Md Saikot</p>
                            <div className='flex items-center gap-2 justify-center'>
                                <FaLocationDot className='text-slate-500' />
                                <p className='text-base font-medium text-slate-600'>Dhaka</p>
                            </div>
                            <div className='py-4'>
                                <Link to={`/tutor-details/${id}`}
                                    className='py-2 px-4 tracking-wide font-medium text-white text-[14px] capitalize rounded-2xl bg-blue-500'>view Profile</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
               
                <SwiperSlide>
                    <div className="shadow-xl border flex flex-col w-96 h-80 mb-7 p-5">
                        <div className="flex justify-center">
                            <img
                                width={110}
                                height={110}
                                className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                src={user1} alt="Tutor photo" />
                        </div>
                        <div className="text-center flex-grow">
                            <h1 className="text-2xl text-gray-700 font-bold">Nullify</h1>
                            <div className='flex items-center justify-center gap-2'>
                                <FaLocationDot className='text-slate-500' />
                                <p className='text-base font-medium text-slate-600'>Dhaka</p>
                            </div>
                        </div>
                        <div className="mt-auto flex justify-center">
                            <Link
                                to={`/tutor-details/${id}`}
                                className="rounded-full py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-xl border flex flex-col w-96 h-80 mb-7 p-5">
                        <div className="flex justify-center">
                            <img
                                width={110}
                                height={110}
                                className="h-[120px] w-[120px] rounded-full bg-slate-500 object-cover"
                                src={user1} alt="Tutor photo" />
                        </div>
                        <div className="text-center flex-grow">
                            <h1 className="text-2xl text-gray-700 font-bold">Nullify</h1>
                            <div className='flex items-center justify-center gap-2'>
                                <FaLocationDot className='text-slate-500' />
                                <p className='text-base font-medium text-slate-600'>Dhaka</p>
                            </div>
                        </div>
                        <div className="mt-auto flex justify-center">
                            <Link
                                to={`/tutor-details/${id}`}
                                className="rounded-full py-2 px-4 text-[12px] font-medium text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm transition-all duration-300">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TutorCard;