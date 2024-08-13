import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`${
        theme === "light" ? "text-[#000] bg-[#fff]" : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] h-auto pb-[70px] max-md:pb-[40px] max-md:px-[40px] max-sm:px-[20px] relative pt-[180px] max-sm:pt-[120px]`}
    >
      <h1 className="text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] font-semibold max-xl:w-full w-[1000px] capitalize leading-[120%]">
        Learn More about my skills and experience through my projects
      </h1>
    </main>
  );
}

export default Hero;
