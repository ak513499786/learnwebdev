import React, { useContext, useState } from "react";
import ThemeContext from "../context/themeContext";
import Github from "../assets/github-portfolio.png";
import Linkedin from "../assets/linkedin-icon.webp";
import Resume from "../assets/resume-icon.jpg";
import Arrow from "../assets/arrow.svg";

function Sidebar() {
  const [visibility, setVisibility] = useState(false);
  const { theme } = useContext(ThemeContext);

  const view = () => {
    setVisibility(!visibility);
  };

  return (
    <aside className="fixed max-sm:hidden bottom-[100px]">
      <ul className="flex flex-col items-center gap-[12px]">
        <li
          onClick={view}
          className={` w-[50px] h-[50px] bg-[#f0f0f0] shadow-[0px_0px_20px_#00000033] cursor-pointer flex items-center justify-center rounded-[7px]`}
        >
          <img
            src={Arrow}
            className={`${visibility ? "rotate-[180deg]" : "rotate-[0deg]"}`}
            width={30}
            height={30}
            alt=""
          />
        </li>
        <div
          className={`flex-col relative ${
            visibility ? "translate-0" : "-translate-x-[50px]"
          } transition-transform shadow-[0px_0px_20px_#00000033] duration-300 ease-in-out  flex bg-white p-[8px] rounded-[7px] gap-[14px]`}
        >
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
            <abbr title="Resume">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1kQ_vPclkdcffm8fiIPpCAPz3qEKWnL2S/view"
              >
                <img
                  src={Resume}
                  className="rounded-[50%]"
                  width={30}
                  height={30}
                  alt=""
                />
              </a>
            </abbr>
          </li>
          {/* <li>
            <a target="_blank" href="https://www.youtube.com/@learnwebdev-g3c">
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
          </li> */}
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
