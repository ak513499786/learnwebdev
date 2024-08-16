import React, { useContext } from "react";
import ThemeContext from "../../../context/themeContext";

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
      <h1 className="text-[30px] max-[450px]:text-[24px] leading-[130%] font-bold">
        Introduction:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            HTML tags{" "}
          </span>
          are fundamental
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            components of web development,
          </span>{" "}
          used to structure and format webpages. Here’s a guide to the different
          types of HTML tags you’ll encounter.
        </p>
      </div>

      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Block Tags:{" "}
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Block tags are used to
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            create large sections of content{" "}
          </span>
          that start on a new line and take up the full width available.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Common Block Tags
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;div&gt;:
          </span>{" "}
          Groups larger sections of content.
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;h1&gt;
          </span>{" "}
          to{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;h6&gt;:
          </span>{" "}
          Groups larger sections of content.
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;p&gt;:
          </span>{" "}
          Define headings with varying levels of importance.{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;section&gt;:
          </span>{" "}
          Defines a section of content.{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;article&gt;:
          </span>{" "}
          Represents a self-contained piece of content.{" "}
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Inline Tags:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Inline tags do not start on a new line and only
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            take up as much width as necessary.{" "}
          </span>
          They are used for small elements within block-level content.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Common Inline Tags
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;span&gt;:
          </span>{" "}
          Target or style a portion of text.{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;a&gt;:
          </span>{" "}
          Creates hyperlinks.{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;img&gt;:
          </span>{" "}
          Embeds images.{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;strong&gt;:
          </span>{" "}
          Indicates strong importance.
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Paired Tags:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Paired tags
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            consist of an opening and a closing tag,{" "}
          </span>
          enclosing content to be styled or treated in a specific way.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Syntax
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;tagname&gt;
          </span>{" "}
          content goes here{" "}
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;/tagname&gt;
          </span>{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span className={`italic font-semibold`}>Note:</span> Content along
          with opening tag and closing tag is know as complete element
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Self-Closing Tags:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Single tags
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            {" "}
            do not have a closing tag{" "}
          </span>
          and are used for elements that do not enclose content.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Syntax
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span
            className={`${
              theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
            } font-bold`}
          >
            &lt;tagname /&gt;
          </span>{" "}
        </p>
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          <span className={`italic font-semibold`}>Note:</span> Self closing
          tags are know as self-closing element
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[130%] font-bold leading-[130%]">
        Conclusion:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Understanding these types of HTML tags—block tags, inline tags, paired
          tags, and self-Closing tags—is crucial for building and structuring
          webpages effectively. Each type of tag serves a specific purpose and
          helps in organizing content in a meaningful way. By mastering these
          tags, you can create well-structured and visually appealing web pages.
        </p>
      </div>
      {/* <div className={`mt-[40px]`}>
        <a
          href="https://www.youtube.com/watch?v=PEbsYf6NRa4"
          target="_blank"
          className={`${
            theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"
          } hover:underline font-bold max-sm:underline text-[20px]`}
        >
          Watch my HTML Structure Tutorial on YouTube
        </a>
      </div> */}
    </section>
  );
}

export default About;
