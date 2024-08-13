import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? "text-[#000] bg-[#fff]" : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px]`}
    >
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        Description and Skills:
      </h1>
      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[30px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >        Inspired: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>

      <p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[20px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >        Skills: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">HTML:</h1>
<p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">TailwindCSS:</h1>
<p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">Responsiveness:</h1>
<p
        className={`${
          theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"
        } mt-[10px] max-xl:w-full text-[20px] max-sm:text-base w-[1024px]`}
      >        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.{" "}
        <a
          href="https://parallel-edu.github.io/FullStack-Batch-3/day-11/class-2.html"
          target="_blank"
          className="underline"
        >
          {" "}
          Click here
        </a>{" "}
        to visit my project.
      </p>
    </section>
  );
}

export default Section;
