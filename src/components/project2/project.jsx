import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import codelinear from "../../assets/Screenshot 2024-08-13 220144.png";
import parallel from "../../assets/Screenshot 2024-08-13 225857.png";
import codelinear2 from "../../assets/Screenshot 2024-08-13 231401.png";
import Arrow from "../../assets/arrow-1.svg";
import { Link } from "react-router-dom";

function Project() {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-[#fff] text-black"
          : " bg-[#121212] text-[#e0e0e0]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] py-[51px]`}
    >
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        Other Projects
      </h1>
      <div className="flex mt-[52px] max-lg:flex-wrap gap-[32px]">
      <div
          className={`${
            theme === "light"
              ? "bg-white text-black shadow-[0px_0px_40px_#00000033] hover:shadow-[0px_0px_40px_#00000066]"
              : "bg-[#2d2d2d] text-[#f8f8f2]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative pb-[40px] rounded-[7px] px-[15px] py-[12px]`}
        >
          <img src={codelinear} className="rounded-[5px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">Codelinear</h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex flex-wrap   gap-[12px]">
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              Reactjs
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              Expressjs
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              TailwindCSS
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              GSAP
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              Swiper
            </p>
          </div>
          <Link
            to={"/projects/codelinear-project"}
            onClick={handleClick}
            className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] cursor-pointer bottom-[10px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read more
            </p>
            <img
              src={Arrow}
              className={`${theme === "light" ? "" : "invert"} w-[24px]`}
              alt=""
            />
          </Link>
        </div>
        <div
          className={`${
            theme === "light"
              ? "bg-white text-black shadow-[0px_0px_40px_#00000033] hover:shadow-[0px_0px_40px_#00000066]"
              : "bg-[#2d2d2d] text-[#f8f8f2]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative pb-[40px] rounded-[7px] px-[15px] py-[12px]`}
        >
          <img src={codelinear2} className="rounded-[5px] w-full" alt="" />
          <h1 className="text-[20px] font-semibold mt-[11.5px]">Codelinear</h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex flex-wrap   gap-[12px]">
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              Reactjs
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              TailwindCSS
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              GSAP
            </p>
            <p className="bg-black text-white px-[10px] py-[2px] text-[14px] rounded-[35px]">
              Swiper
            </p>
          </div>
          <Link
            to={"/projects/codelinear-internship-project"}
            onClick={handleClick}
            className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] cursor-pointer bottom-[10px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read more
            </p>
            <img
              src={Arrow}
              className={`${theme === "light" ? "" : "invert"} w-[24px]`}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
