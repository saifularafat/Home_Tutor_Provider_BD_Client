import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <div className="text-center">
      <h4
        data-aos="fade-left"
        data-aos-duration="1900"
        className="mb-2 md:mb-6 text-lg md:text-3xl text-center"
      >
        Welcome to
      </h4>
      <h1
        data-aos="fade-right"
        data-aos-duration="2500"
        className="md:mb-7 font-semibold  text-2xl  md:text-7xl"
      >
        H-TutorProvider<sup className="text-green-400">B<span className="text-red-400">D</span></sup>
      </h1>
      <p className=" text-md mx-5 ">
        Exercise your brain with these interesting quizzes and puzzles &
        win points, badges, prizes and impress your friends & colleagues!
      </p>

      <Link
        to="/allSubjects"
        className="mt-4 btn-sm md:btn-md md:mt-6 md:text-lg text-white btn-secondary btn rounded-full text-md  border-none px-8"
      >
       Tutor Profile
      </Link>
    </div>
  );
};

export default BannerContent;
