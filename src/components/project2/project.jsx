import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import Project1 from "../../assets/Screenshot 2024-08-06 100912.png";
import Project2 from "../../assets/Screenshot 2024-08-06 100936.png";
import Project3 from "../../assets/Screenshot 2024-08-06 101032.png";
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
          ? " bg-[#121212] text-[#e0e0e0]"
          : "bg-[#e5e5e5] text-black"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] py-[101px] max-md:py-[51px]`}
    >
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        My Projects
      </h1>
      <div className="flex mt-[52px] max-lg:flex-wrap gap-[32px]">
        <div
          className={`${
            theme === "light"
              ? "bg-white text-black"
              : "bg-[#121212] text-[#e0e0e0] shadow-[0px_0px_40px_#00000066] hover:shadow-[0px_0px_40px_#000000]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative h-[350px] max-[1150px]:h-[300px] rounded-[7px] px-[12px] py-[20px]`}
        >
          <img src={Project1} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Basic Tailwind Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex gap-[12px]">
            <p
              className={`${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-[#ffffff] text-black"
              } px-[8px] py-[4] text-[14px] rounded-[35px]`}
            >
              HTML
            </p>
            <p
              className={`${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-[#ffffff] text-black"
              } px-[8px] py-[4] text-[14px] rounded-[35px]`}
            >
              TailwindCSS
            </p>
          </div>
          <Link
            onClick={handleClick}
            to={"/projects/tailwind-project"}
            className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] cursor-pointer bottom-[5px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
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
              ? "bg-white text-black"
              : "bg-[#121212] text-[#e0e0e0] shadow-[0px_0px_40px_#00000066] hover:shadow-[0px_0px_40px_#000000]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative h-[350px] max-[1150px]:h-[300px] rounded-[7px] px-[12px] py-[20px]`}
        >
          <img src={Project3} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Portfolio Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex gap-[12px]">
            <p
              className={`${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-[#ffffff] text-black"
              } px-[8px] py-[4] text-[14px] rounded-[35px]`}
            >
              Reactjs
            </p>
            <p
              className={`${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-[#ffffff] text-black"
              } px-[8px] py-[4] text-[14px] rounded-[35px]`}
            >
              TailwindCSS
            </p>
          </div>
          <Link
            onClick={handleClick}
            to={"/projects/portfolio-project"}
            className="absolute flex cursor-pointer max-xl:left-[65%] max-[670px]:left-[calc(100%-110px)] left-[72%] bottom-[5px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
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
