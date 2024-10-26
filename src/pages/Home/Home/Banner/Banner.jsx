import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import "./Banner.css";
import BannerContent from "./BannerContent";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* slide-2 */}
      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-slate-700 text-slate-200">
          <BannerContent />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-3 */}
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1599249301066-2fde88763196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-slate-700 text-slate-200">
          <BannerContent />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-4 */}
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-slate-700 text-slate-200">
          <BannerContent />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-5 */}
      <div id="slide4" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-slate-700 text-slate-200">
          <BannerContent />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
    </AutoplaySlider>
  );
};

export default Banner;