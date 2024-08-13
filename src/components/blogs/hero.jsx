import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light"
          ? "text-[black] bg-[#ffffff]"
          : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[600px] relative pt-[180px]`}
    >
      <h1 className=" text-[92px] max-lg:text-[76px] text-center max-md:text-[62px] max-sm:text-[56px] font-semibold w-full capitalize leading-[120%]">
        Explore My Blogs
      </h1>
      <p className="absolute w-[90%] bottom-[50px] left-[5%] text-[20px] leading-[120%] text-center">
        Sharing knowledge, insights, and coding tips to help you on your
        development journey.
      </p>
    </main>
  );
}

export default Hero;
