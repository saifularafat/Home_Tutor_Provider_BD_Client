import { Link } from "react-router-dom";

const HirePageRequestModel = ({ openModal, setOpenModal, actionBtn, subLink }) => {
    return (
        <div className="md:max-w-2xl mx-auto flex items-center justify-center md:pt-6 pt-5">
            <button onClick={() => setOpenModal(true)} className="rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-4 py-[6px] text-white">
                {actionBtn}
            </button>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-3xl h-[470px] overflow-y-scroll scroll-smooth  rounded-lg bg-white md:p-6 p-3 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h6 className="text-center text-2xl font-bold text-slate-900 md:pb-3 pb-0 md:pt-0 pt-7">Terms and Conditions </h6>

                        <div className="text-left">
                            <h4 className="text-lg font-semibold"> সার্ভিস চার্জ প্রদান:</h4>
                            <p>টিউশন কনফর্ম হওয়ার (৭-১০) দিনের মধ্যে, প্রথম মাসের বেতনের ৬০% টাকা <span className="text-base font-bold ">Home Tutor Provider BD</span>-কে সার্ভিস চার্জ হিসেবে প্রদান করতে হবে।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold"> টিউশন বাতিল হলে ফেরত:</h4>
                            <p>টিউশন কনফর্ম হওয়ার (৭-১০) দিনের মধ্যে, প্রথম মাসের বেতনের ৬০% টাকা <span className="text-base font-bold ">Home Tutor Provider BD</span>-কে সার্ভিস চার্জ হিসেবে প্রদান করতে যদি টিউশন ১ মাসের মধ্যে চলে যায়, তবে ৩০% টাকা ফেরত দেওয়া হবে।
                                তবে, যদি টিউটরের দোষের কারণে (যেমন: অনিয়মিত যান, পড়াতে ভুল করেন, আন্তরিকতার সাথে পড়ান না) টিউশন চলে যায়, তাহলে কোন সার্ভিস চার্জ ফেরত দেওয়া হবে না।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold"> গার্ডিয়ানের সাথে যোগাযোগ:</h4>
                            <p>গার্ডিয়ানের নাম্বার পাওয়ার সাথে সাথে, ১ ঘন্টার মধ্যে গার্ডিয়ানের সাথে যোগাযোগ করতে হবে এবং <span className="text-base font-bold ">Home Tutor Provider BD</span>-কে আপডেট দিতে হবে।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold">ডেমো ক্লাসের আপডেট:</h4>
                            <p>ডেমো ক্লাসের সময়সীমার আপডেট নিয়মিত জানাতে হবে। আপডেট না জানানোর কারণে যদি টিউশন বাতিল হয়ে যায়, তার পুরো দায়ভার টিউটরের। অর্থাৎ, টিউটরকে ৬০% সার্ভিস চার্জ দিতে হবে।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold"> ডেমো ক্লাস:</h4>
                            <p>টিউটরকে ২টি ডেমো ক্লাস করাতে হবে, যার জন্য কোন অর্থ দাবি করা যাবে না। টিউটরকে ২টি ডেমো ক্লাস করাতে হবে, যার জন্য কোন অর্থ দাবি করা যাবে না।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold">দায়িত্বহীনতার পরিণতি:</h4>
                            <p>টিচারের দায়িত্বহীনতার কারণে যদি টিউশন চলে যায় বা বাতিল হয়, তাহলে ভবিষ্যতে আর কখনো টিউশন দেওয়া হবে না। এই বিষয়টি <span className="font-bold">BTPA</span> - <span className="text-base font-bold">Bangladesh Tuition Provider Association</span>-এ রিপোর্ট করা হবে, যার ফলে BTPA সদস্যরা আপনাকে টিউশন দিবেনা।</p>
                        </div>

                        <div className="text-left">
                            <h4 className="text-lg font-semibold">আবেদন নীতিমালা:</h4>
                            <p>টিউশনে আবেদন করার সময় (বিষয়, লোকেশন, স্যালারি, দিন) ইত্যাদি দেখে আবেদন করতে হবে। পরবর্তীতে (সময়, বেতন, দূরত্ব) জনিত কোন অজুহাত/অভিযোগ গ্রহণযোগ্য হবে না। গার্ডিয়ানের নাম্বার পাওয়ার পর এসব অজুহাত দিয়ে টিউশন বাতিল করা যাবে না।</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold">ডেমো ক্লাসের ফলাফল:</h4>
                            <p>গার্ডিয়ান এবং ছাত্র-ছাত্রীর পছন্দ অনুযায়ী ডেমো ক্লাস হলে টিউটরকে পড়ানোর জন্য নিশ্চিত করা হবে। অন্যথায়, ২টি ডেমো ক্লাস নেওয়ার পর টিউশন কনফর্ম না হলে, এর জন্য কোন টাকা দাবি করা যাবে না।</p>
                        </div>
                        <div className='flex items-end justify-end w-full mt-2 gap-2 md:pb-2'>
                            <div className="pt-0 flex gap-3">
                                <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-3 text-sm text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-200">
                                    No
                                </button>
                                <Link to={subLink} onClick={() => setOpenModal(false)} className="rounded-md border bg-indigo-600 px-6 py-3 text-sm text-white hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200">
                                    Yes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HirePageRequestModel;