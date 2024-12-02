import MarqueeSliderPage from "../../../../../Components/MarqueeSliderPage/MarqureeSliderPage";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import InfoCart from "./InfoCart";

const AdminHome = () => {
    return (
        <div className="py-10">
            <PageTitleShow currentPage="Admin Home" />
            <InfoCart />

          <div className="mx-5">
          <MarqueeSliderPage
                notice="Notice"
                noticeBG='bg-orange-600'
                marquessText="আপনার প্রফাইল আপডেট করুন। প্রোফাইল আপডেট না করলে আপনি কোন টিউশনে আবেদন করতে পারবেন না এবং আপনার প্রফাইল এর কোন ফিচার দেখতে পারবেন না। তাই প্রোফাইল আপডেট করে আমাদের টিউশনে অ্যাপ্লাই করুন।"
            />
          </div>
        </div>
    );
};

export default AdminHome;