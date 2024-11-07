import DBButton from "../../../../Components/Button/DBButton";
import MarqueeSliderPage from "../../../../Components/MarqueeSliderPage/MarqureeSliderPage";

const TutorHome = () => {
    return (
        <div className="md:overflow-x-hidden overflow-x-auto">
            <MarqueeSliderPage
                notice="Notice"
                noticeBG='bg-orange-600'
                marquessText="আপনার প্রফাইল আপডেট করুন। প্রোফাইল আপডেট না করলে আপনি কোন টিউশনে আবেদন করতে পারবেন না এবং আপনার প্রফাইল এর কোন ফিচার দেখতে পারবেন না। তাই প্রোফাইল আপডেট করে আমাদের টিউশনে অ্যাপ্লাই করুন।"
            />
            <div>
                <DBButton link='' buttonBG='bg-blue-500' title='update Profile' />
            </div>
        </div>
    );
};

export default TutorHome;