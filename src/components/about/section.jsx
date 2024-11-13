import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import Me from "../../assets/20240504_000112.jpg";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light"
          ? "text-[black] bg-[#ffffff]"
          : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[51px] pb-[121px] max-md:pb-[51px]`}
    >
      <div className="flex gap-[52px] max-lg:flex-col max-lg:items-start justify- items-center">
        <img
          src={Me}
          alt=""
          width={500}
          height={300}
          className="object-cover rounded-[13px]"
        />
        <div className="flex max-sm:w-full flex-col gap-[12px]">
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] max-[450px]:text-[24px] leading-[120%] font-bold">
              Name:
            </h1>
            <p className="text-[24px] leading-[120%] italic">
              Md Ahmed Ali Khan
            </p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] max-[450px]:text-[24px] leading-[120%] font-bold">
              Qualification:
            </h1>
            <p className="text-[24px] leading-[120%] italic">B.E(CSE)</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] max-[450px]:text-[24px] leading-[120%] font-bold">
              Passed Out Year:
            </h1>
            <p className="text-[24px] leading-[120%] italic">2022</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] max-[450px]:text-[24px] leading-[120%] font-bold">
              Experience:
            </h1>
            <p className="text-[24px] leading-[120%] italic">1+ Yrs</p>
          </div>
          <a
            target="_blank"
            className="max-sm:w-full"
            href="https://drive.google.com/file/d/19xTWiaRnVVJxZ8u006FUc-Mt2XDNthS7/view?usp=sharing"
          >
            {" "}
            <button
              className={`w-full text-[20px] border-[1px] ${
                theme === "light"
                  ? "text-[#32cd32] max-sm:w-full max-sm:bg-[#32cd32] max-sm:text-white hover:bg-[#32cd32] hover:text-white border-[#32cd32]"
                  : "text-[#2e8b5f] hover:bg-[#2e8b5f] max-sm:bg-[#2e8b5f] max-sm:text-black border-[#2e8b5f] hover:text-black"
              } transition-all max-sm:w-full font-semibold duration-300 mt-[20px] rounded-[7px] h-[45px]`}
            >
              Resume
            </button>
          </a>
        </div>
      </div>
      <div
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } flex justify-start`}
      >
        <p className="mt-[52px] text-[20px] w-[1024px]">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            Hi! I'm Ahmed
          </span>{" "}
          <br />
          I’m currently a MERN Stack Developer at{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            <a href="https://www.codelinear.com">Codelinear</a>
          </span>
          , where I specialize in building responsive, scalable web applications
          using{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            MongoDB, Express.js, React.js, and Node.js.
          </span>{" "}
          In my role, I focus on delivering user-centric digital solutions that
          align with both technical and business goals.
        </p>
      </div>

      <div
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } flex justify-end`}
      >
        <p className="mt-[52px] text-[20px] w-[1024px]">
          {" "}
          My journey into web development began with a deep interest in
          technology and a drive to create impactful solutions. Over the years,
          I’ve developed a wide range of projects, mastering the{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            MERN stack
          </span>{" "}
          and exploring tools like{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            GSAP and Tailwind CSS
          </span>
          . These experiences have shaped me into a developer who thrives on
          solving complex problems.
        </p>
      </div>
      <div
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } flex justify-start`}
      >
        <p className="mt-[52px] text-[20px] w-[1024px]">
          Looking ahead, I’m excited to continue pushing the boundaries of web
          development, learning new technologies, and taking on challenging
          projects. My goal is to 
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {' '}keep growing{' '}
          </span> 
          as a developer , contribute to impactful projects, and collaborate
          with others who share a passion for creating outstanding digital
          experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
