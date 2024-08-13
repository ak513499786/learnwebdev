import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Github from "../assets/github-portfolio.png";
import Linkedin from "../assets/linkedin-icon.webp";
import Resume from "../assets/resume-icon.jpg";
import ThemeContext from "../context/themeContext";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.svg";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menu, setmenu] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
    setmenu(false);
  };

  return (
    <header className="flex z-[999] relative justify-center">
      {/* sm-640px  
      md-768px 
      lg-1024px 
      xl-1280px 
      2xl-1440px */}
      <div
        className={`flex ${
          theme === "light"
            ? "text-[#000000] bg-[#ffffff] shadow-[0px_0px_20px_#00000033]"
            : "text-[#e0e0e0] bg-[#121212] shadow-[0px_0px_20px_#444444]"
        } w-[1024px] max-xl:w-[90%] rounded-[50px] max-sm:px-[25px] fixed top-[20px] justify-between items-center px-[40px] pt-[10px] pb-[10px]`}
      >
        <Link onClick={handleClick} to={"/"}>
          <img src={Logo} className="max-[400px]:w-[35px]" alt="" />
        </Link>
        <img
          src={Hamburger}
          onClick={() => setmenu(menu === true ? false : true)}
          className="hidden max-sm:block max-[400px]:w-[35px]"
          alt=""
        />
        <nav
          className={`absolute ${
            menu ? "translate-0" : "translate-x-full"
          }        ${
            theme === "light"
              ? "text-[#000000] bg-[#ffffff] shadow-[0px_0px_20px_#00000033]"
              : "text-[#e0e0e0] bg-[#121212] shadow-[0px_0px_20px_#444444]"
          } transition-transform hidden max-sm:flex duration-300 ease-in-out max-[500px]:w-full flex w-[50%] h-[100vh] px-[20px] py-[40px] flex-col gap-[32px] top-[-20px] right-[-40px]`}
        >
          <div className="flex justify-between w-[90%] items-center">
            <div
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`w-[60px] cursor-pointer p-[4px] ${
                theme === "light"
                  ? " border-[whitesmoke] bg-[#00000033]"
                  : " border-[black] bg-[#ffffff66]"
              } border-[1px] rounded-[35px]`}
            >
              <div
                className={`w-[20px] ${
                  theme === "light"
                    ? "translate-0 bg-[white]"
                    : "translate-x-[30px] bg-[#121212]"
                } h-[20px] transition-all duration-300 rounded-[50%]`}
              ></div>
            </div>
            <img
              src={Close}
              onClick={() => setmenu(menu === true ? false : true)}
              className="w-[40px]"
              alt=""
            />
          </div>

          <ul className="flex flex-col gap-[12px]">
            <li>
              <Link
                onClick={handleClick}
                className="max-sm:text-[24px]"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="max-sm:text-[24px]"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="max-sm:text-[24px]"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="max-sm:text-[24px]"
                to={"/blogs"}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="max-sm:text-[24px]"
                to={"/projects"}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className=" mt-[34px]">
            <p className="mb-[12px] font-semibold">Socials:</p>
            <ul className="flex gap-[24px]">
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@learnwebdev-g3c"
                >
                  <img
                    src={
                      "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png"
                    }
                    className="rounded-[50%]"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/ak513499786">
                  <img
                    src={Github}
                    className="bg-white rounded-[50%]"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-ahmed-ali-khan-138a0920a/"
                >
                  <img src={Linkedin} width={30} height={30} alt="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1IpelorQYhuFYQ6jjBHnlzt7lKooGIeaT/view?usp=drive_link"
                >
                  {" "}
                  <img
                    src={Resume}
                    className="rounded-[50%]"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="flex max-sm:hidden items-center gap-[52px]">
          <ul className="flex gap-[24px]">
            <li>
              <Link onClick={handleClick} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/blogs"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/projects"}>
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-[60px] cursor-pointer p-[4px] ${
              theme === "light"
                ? " border-[whitesmoke] bg-[#00000033]"
                : " border-[black] bg-[#ffffff66]"
            } border-[1px] rounded-[35px]`}
          >
            <div
              className={`w-[20px] ${
                theme === "light"
                  ? "translate-0 bg-[whitesmoke]"
                  : "translate-x-[30px] bg-black"
              } h-[20px] transition-all duration-300 rounded-[50%]`}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
