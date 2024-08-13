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
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[600px] relative pt-[180px]`}
    >
      <h1 className=" text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] font-semibold leading-[120%]">
        Under<br className="max-[420px]:inline  hidden" />
        <span className="max-[420px]:inline  hidden">-</span>standing The Basic
        Structure Of HTML
      </h1>
    </main>
  );
}

export default Hero;
