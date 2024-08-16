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
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[81px] pt-[141px] pb-[221px]`}
    >
      <div className="flex max-md:flex-col max-md:gap-[56px] max-xl:gap-[32px] justify-between max-sm:pt-[0px] max-sm:pb-[81px] pb-[221px]">
        <p
          className={`${
            theme === "light" ? "text-[#000]" : "text-[#e0e0e0]"
          } max-xl:w-fll text-[32px] leading-[120%] max-md:w-full max-sm:text-[24px] w-[594px]`}
        >
          {" "}
          Crafting a sleek, educational platform with a modern approach to
          online learning using Next.js and Tailwind CSS
        </p>
        <div className="w-[500px] max-md:w-full max-xl:w-[300px] max-[900px]:w-[200px]">
          <div className="flex w-[444px] max-xl:w-full mb-[24px] max-sm:mb-[16px] gap-[12px] items-center">
            <p className="text-base italic">Tech Stack and Skills</p>
            <span className="h-[1px] w-[calc(100%-160px)] bg-[#12121266]"></span>{" "}
          </div>
          <div className="flex max-md:w-full flex-wrap max-[900px]:w-[200px] w-[300px] gap-[12px]">
            <p
              className={`${
                theme === "light"
                  ? "bg-[#12121233] text-[#000] font-medium"
                  : "bg-[#2d2d2d] text-[#f8f8f2] font-medium"
              } px-[20px] py-[5px] text-[14px] rounded-[5px]`}
            >
              Nextjs
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
          </div>
        </div>
      </div>
      <div className="flex w-[1154px] max-xl:w-full mb-[24px] max-sm:mb-[12px] gap-[12px] items-center">
        <p className="text-base italic">About</p>
        <span className="h-[1px] w-full bg-[#12121266]"></span>{" "}
      </div>
      <p
        className={`${
          theme === "light" ? "text-[#000]" : "text-[#e0e0e0]"
        } max-xl:w-fll text-[32px] max-xl:w-full leading-[130%] max-md:text-[24px] max-sm:text-[20px] w-[1154px]`}
      >
        ParallelEdU is a sleek and modern website that represents the
        educational brand, offering an engaging platform for students and
        educators alike. The main site provides detailed information about the
        company and its offerings while ensuring a smooth user experience with
        its intuitive design and responsive layout. Built using Next.js and
        Tailwind CSS, the site reflects the brand's commitment to quality
        education. Additionally, a separate dashboard and platform for students
        to join courses is currently under development, further expanding
        ParallelEdU’s digital learning ecosystem.
      </p>
    </section>
  );
}

export default Section;
