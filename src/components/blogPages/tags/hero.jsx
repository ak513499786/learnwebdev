import React, { useContext } from "react";
import ThemeContext from "../../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light"
          ? "text-[black] bg-[#ffffff]"
          : "text-[#e0e0e0] bg-[#121212]"
        } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[650px] max-sm:pt-[180px] relative pt-[250px]`}
        >
      <h1 className=" text-[92px] max-lg:w-full max-lg:text-[76px] w-[1024px] max-md:text-[62px] max-sm:text-[56px] font-semibold leading-[120%]">
        Different Types of HTML Tags{" "}
      </h1>
    </main>
  );
}

export default Hero;
