import Marquee from "react-fast-marquee";

const MarqueeSliderPage = ({noticeBG ,notice, marquessText }) => {
    return (
        <div className="flex items-center w-full bg-white rounded-l-xl rounded-r-md my-8 shadow-xl">
            <div className={`${noticeBG} md:text-xl text-sm text-white font-medium md:px-5 px-2 py-3 rounded-l-xl`}>
                {notice}
            </div>
            <Marquee speed={40} className="md:text-xl text-sm font-medium">
                {marquessText}
            </Marquee>
        </div>
    );
};

export default MarqueeSliderPage;