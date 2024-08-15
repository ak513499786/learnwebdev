import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light"
          ? "text-[#000] bg-[#fff]"
          : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pb-[51px] pb-[121px]`}
    >
      <div className="flex max-md:flex-col max-xl:gap-[32px] justify-between max-sm:py-[51px] pt-[141px] pb-[221px]">
        <p
          className={`${
            theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
          } max-xl:w-fll text-[32px] max-md:w-full max-sm:text-[24px] w-[594px]`}
        >
          {" "}
          An early dive into web development, contributing to Codelinear’s
          initial design and structure during my internship
        </p>
        <div className="w-[500px] max-md:w-full max-xl:w-[300px] max-[900px]:w-[200px]">
          <div className="flex w-[444px] max-xl:w-full mb-[24px] max-md:mb-[12px] gap-[12px] items-center">
            <p className="text-base ml-[4px] font-medium">
              Skills Used
            </p>
            <span className="h-[1px] w-[calc(100%-180px)] max-xl:w-[calc(100%-100px)] bg-[#12121266]"></span>
          </div>
          <div className="flex max-md:w-full flex-wrap max-[900px]:w-[200px] w-[300px] gap-[12px]">
            <p
              className={`${
                theme === "light"
                  ? "bg-[#12121233] text-[#000] font-medium"
                  : "bg-[#2d2d2d] text-[#f8f8f2] font-medium"
              } px-[20px] py-[5px] text-[14px] rounded-[5px]`}
            >
              Reactjs
            </p>
            <p
              className={`${
                theme === "light"
                  ? "bg-[#12121233] text-[#000] font-medium"
                  : "bg-[#2d2d2d] text-[#f8f8f2] font-medium"
              } px-[20px] py-[5px] text-[14px] rounded-[5px]`}
            >
              TailwindCSS
            </p>
            <p
              className={`${
                theme === "light"
                  ? "bg-[#12121233] text-[#000] font-medium"
                  : "bg-[#2d2d2d] text-[#f8f8f2] font-medium"
              } px-[20px] py-[5px] text-[14px] rounded-[5px]`}
            >
              GSAP
            </p>
            <p
              className={`${
                theme === "light"
                  ? "bg-[#12121233] text-[#000] font-medium"
                  : "bg-[#2d2d2d] text-[#f8f8f2] font-medium"
              } px-[20px] py-[5px] text-[14px] rounded-[5px]`}
            >
              Swiper
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-[64px] max-md:text-[56px] mt-[121px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        Description and Skills:
      </h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[30px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Inspired: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>

      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[20px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Skills: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">HTML:</h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">TailwindCSS:</h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">Responsiveness:</h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">Reactjs:</h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.{" "}
      </p>
    </section>
  );
}

export default Section;
