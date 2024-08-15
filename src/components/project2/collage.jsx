import React, { useContext, useState } from "react";
import ThemeContext from "../../context/themeContext";
import visit from '../../assets/view.svg'
function Collage() {
  const { theme } = useContext(ThemeContext);
  const [view, setView] = useState(true);
  return (
    <section
      className={`${
        theme === "light" ? "bg-[#f7f7f7]" : "bg-[#212121]"
      } px-[80px] max-sm:px-[20px] relative max-md:px-[40px] max-sm:py-[30px] py-[81px]`}
    >
      {view && (
        <div
          className={`${
            theme === "light" ? "bg-[#21212166]" : "bg-[#121212bf]"
          } absolute top-[81px] left-[80px] flex items-center justify-center max-md:left-[40px] max-sm:left-[20px] max-sm:top-[30px] backdrop-blur-md w-[calc(100%-160px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] h-[600px]`}
        >
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
            } max-sm:w-[90%] flex items-center w-[500px] flex-col px-[20px] py-[30px] rounded-[7px]`}
          >
            <h1
              className={`${
                theme === "light" ? "text-black" : "text-[#e0e0e0]"
              } text-[32px] leading-[120%] text-center mb-[52px]`}
            >
              Wanna try Codelinear?
            </h1>
            <div className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:gap-[12px]">
              <a
                href="https://www.paralleledu.com"
                target="_blank"
                className={`${
                  theme === "light"
                    ? "border-[black] hover:bg-black hover:text-white max-sm:bg-black max-sm:text-white"
                    : "border-[white] hover:bg-white hover:text-black text-white max-sm:text-black max-sm:bg-white"
                } w-[180px] text-center font-semibold border-[1px] rounded-[7px] max-sm:w-full px-[20px] py-[12px] transition-all`}
              >
                Visit the Website
              </a>
              <button
                onClick={() => setView(false)}
                className={`${
                  theme === "light"
                    ? "border-[#32cd32] text-[#32cd32] hover:bg-[#32cd32] hover:text-white max-sm:bg-[#32cd32] max-sm:text-[white]"
                    : "border-[#2e8b5f] text-[#2e8b5f] hover:bg-[#2e8b5f] max-sm:bg-[#2e8b5f] max-sm:text-white hover:text-white"
                } ml-[12px] max-sm:ml-0 font-semibold max-sm:block max-sm:w-full border-[1px] rounded-[7px] w-[180px] px-[20px] py-[12px] transition-all`}
              >
                Check From Here
              </button>
            </div>
          </div>
        </div>
      )}
      <iframe
        src="https://www.paralleledu.com"
        width={100}
        className="w-[100%] bg-[white] h-[600px]"
        frameborder="0"
      ></iframe>
      {view === false && (
        <a
          href="https://www.paralleledu.com"
          target="_blank"
          className="absolute bottom-[100px] bg-white rounded-[5px] right-[100px] max-sm:bottom-[40px] max-md:right-[50px] max-sm:right-[30px]"
        >
          <img src={visit} alt="" />
        </a>
      )}
    </section>
  );
}

export default Collage;
