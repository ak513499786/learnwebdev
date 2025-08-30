import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { Link } from "react-router-dom";
function Footer() {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <footer
      className={`${
        theme === "light"
          ? "text-[#000000] bg-[#ffffff]"
          : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-[500px]:flex-col max-[500px]:gap-[40px] flex justify-between pt-[50px] pb-[80px]`}
    >
      <div className="flex max-sm:gap-[32px] max-[500px]:justify-between gap-[52px]">
        <ul className="flex flex-col gap-[4px]">
          <li className="font-semibold mb-[4px] text-[20px]">Socials:</li>
          <li>
            <a
              target="_blank"
              className="hover:underline translate-all"
              href="https://www.linkedin.com/in/md-ahmed-ali-khan-138a0920a/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="hover:underline translate-all"
              href="https://github.com/ak513499786"
            >
              Github
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              className="hover:underline translate-all"
              href="https://www.youtube.com/@learnwebdev-g3c"
            >
              Youtube
            </a>
          </li> */}
        </ul>
        <ul className="flex flex-col max-[500px]:w-[120px] gap-[4px]">
          <li className="font-semibold mb-[4px] text-[20px]">Contact:</li>
          <li>
            <a
              href="mailto:ahmedkhan.cse010@gmail.com"
              className="hover:underline translate-all"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="hover:underline translate-all"
              href="tel: +91 7396822306"
            >
              Phone Number
            </a>
          </li>
        </ul>
      </div>
      <ul className="flex max-[500px]:w-[120px] flex-col gap-[4px]">
        <li className="font-semibold mb-[4px] text-[20px]">Sitemap:</li>
        <li>
          <Link
            className="hover:underline translate-all"
            onClick={handleClick}
            to={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline translate-all"
            onClick={handleClick}
            to={"/projects"}
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            className="hover:underline translate-all"
            onClick={handleClick}
            to={"/blogs"}
          >
            Blogs
          </Link>
        </li> */}
        <li>
          <Link
            className="hover:underline translate-all"
            onClick={handleClick}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
