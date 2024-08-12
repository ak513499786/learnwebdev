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
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[600px] max-[1300px]:h-auto max-[1300px]:pb-[50px] relative pt-[180px] max-md:pt-[120px]`}
    >
      <h1 className=" text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] font-semibold w-[1200px] max-[1300px]:w-full capitalize leading-[120%]">
        Hi, <br /> I'm Ahmed,
        <br /> A Passionate Web Developer
      </h1>
    </main>
  );
}

export default Hero;
