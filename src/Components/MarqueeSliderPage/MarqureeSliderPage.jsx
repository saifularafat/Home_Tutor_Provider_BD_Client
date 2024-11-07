import Marquee from "react-fast-marquee";

const MarqueeSliderPage = ({noticeBG ,notice, marquessText }) => {
    return (
        <div className="flex items-center w-full bg-white rounded-l-xl rounded-r-md my-8 shadow-xl">
            <div className={`${noticeBG} text-xl text-white font-medium px-5 py-3 rounded-l-xl`}>
                {notice}
            </div>
            <Marquee speed={40} className="text-xl font-medium">
                {marquessText}
            </Marquee>
        </div>
    );
};

export default MarqueeSliderPage;