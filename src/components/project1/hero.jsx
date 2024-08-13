import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light" ? "text-[#000] bg-[#fff]" : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pt-[200px] max-sm:h-[500px] h-[100vh] relative pt-[300px]`}
    >
      <h1 className="text-[92px] text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] font-semibold capitalize leading-[120%]">
        Basic Tailwind Project
      </h1>
    </main>
  );
}

export default Hero;
