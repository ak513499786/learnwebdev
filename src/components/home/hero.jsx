import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className="px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[650px] overflow-hidden relative max-[500px]:pt-[150px] pt-[250px]">
      <h1
        className={`text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] font-semibold fixed z-[-1] ${
          theme === "light" ? "text-white" : "text-[black]"
        } w-[1100px] max-xl:w-[90%] capitalize leading-[120%]`}
      >
        Bringing Ideas to Life with Code and Creativity
      </h1>
      <div className="absolute w-full top-0 z-[-5]  left-0">
        <img
          className="w-full max-md:h-[100vh] fixed blur-[20px]"
          src={
            "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
        {theme === "dark" && <div className="bg-[#f7f7f733] absolute top-0 left-0 w-full h-[100vh]"></div>}
      </div>
    </main>
  );
}

export default Hero;
