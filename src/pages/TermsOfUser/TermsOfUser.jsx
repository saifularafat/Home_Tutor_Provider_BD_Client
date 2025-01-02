import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";

const TermsOfUser = () => {
    return (
        <div className="max-w-5xl mx-auto md:py-10 py-5">
            <PageTitleShow currentPage="Terms and Condition | " />
            <h3 className="text-2xl font-bold text-left pb-5">Home Tutor Provider <sup>BD</sup></h3>            <div>
                <div className="flex flex-col space-y-4">
                    <h6 className=" text-xl font-bold text-slate-900 pb-3">Terms and Conditions </h6>

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
                </div>
            </div>

        </div>
    );
};

export default TermsOfUser;