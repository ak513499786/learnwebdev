import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
// import Project1 from "../../assets/Screenshot 2024-08-06 100912.png";
// import Project2 from "../../assets/Screenshot 2024-08-06 100936.png";
// import Project3 from "../../assets/Screenshot 2024-08-06 101032.png";
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
        My Blogs
      </h1>
      <div className="flex mt-[52px] max-lg:flex-wrap gap-[32px]">
        <Link
          onClick={handleClick}
          to={"/blogs/introduction-to-html"}
          className={`${
            theme === "light"
              ? "bg-white text-black shadow-[0px_0px_40px_#00000033] hover:shadow-[0px_0px_60px_#00000033]"
              : "bg-[#2d2d2d] text-[#f8f8f2]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 max-sm:hover:scale-100 transition-all duration-300 relative pb-[40px] rounded-[7px] px-[21px] py-[12px]`}
        >
          {/* <img src={Blogs1} className="border-[1px]" alt="" /> */}
          <h1 className="text-[20px] font-semibold mt-[12px] leading-[130%]">
            The Basic Structure of HTML
          </h1>
          <div className="flex mt-[12px] gap-[12px]">
            <p
              className={`${
                theme === "light" ? "text-black" : "text-[#e0e0e0]"
              } py-[4] text-base rounded-[35px]`}
            >
              Discover the fundamental structure of HTML, the backbone of every
              webpage. Whether you're just starting....
            </p>
          </div>
          <div className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] cursor-pointer bottom-[10px]">
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img
              src={Arrow}
              className={`${theme === "light" ? "" : "invert"} w-[24px]`}
              alt=""
            />
          </div>
        </Link>
        <Link
          onClick={handleClick}
          to={"/blogs/types-of-tags"}
          className={`${
            theme === "light"
              ? "bg-white text-black shadow-[0px_0px_40px_#00000033] hover:shadow-[0px_0px_60px_#00000033]"
              : "bg-[#2d2d2d] text-[#f8f8f2]"
          } w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 max-sm:hover:scale-100 transition-all duration-300 relative pb-[40px] rounded-[7px] px-[21px] py-[12px]`}
        >
          {/* <img src={Blogs1} className="border-[1px]" alt="" /> */}
          <h1 className="text-[20px] font-semibold mt-[12px] leading-[130%]">
            Different Types of HTML Tags{" "}
          </h1>
          <div className="flex mt-[12px] gap-[12px]">
            <p
              className={`${
                theme === "light" ? "text-black" : "text-[#e0e0e0]"
              } py-[4] text-base rounded-[35px]`}
            >
              HTML tags are the foundational elements used to build and
              structure webpages. In this....
            </p>
          </div>
          <div className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] cursor-pointer bottom-[10px]">
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img
              src={Arrow}
              className={`${theme === "light" ? "" : "invert"} w-[24px]`}
              alt=""
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Project;
