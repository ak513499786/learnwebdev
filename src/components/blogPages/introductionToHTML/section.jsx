import React, { useContext } from "react";
import ThemeContext from "../../../context/themeContext";
import CopyableCode from "./copiablecode";

function About() {
  const { theme } = useContext(ThemeContext);
  const head = `<h1>Hello, World!</h1>
<p>This is a paragraph.</p>`;
  const body = `<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a simple HTML document.</p>
</body>`;
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a simple HTML document.</p>
</body>
</html>
`;
  return (
    <section
      className={`${
        theme === "light"
          ? "text-[black] bg-[#ffffff]"
          : "text-[#e0e0e0] bg-[#121212]"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[51px] pb-[121px] max-md:pb-[51px]`}
    >
      <h1 className="text-[30px] max-[450px]:text-[24px] leading-[120%] font-bold">
        Introduction:
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Discover the fundamental structure of HTML, the backbone of every
          webpage. Whether you're just starting out or need a quick refresher,
          this guide will help you grasp the essential tags and elements that
          form a basic HTML document.
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[120%] font-bold">
        What is HTML?{" "}
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          HTML, which stands for HyperText Markup Language, is the standard
          language used to create webpages. It defines the structure of your
          content, like headings, paragraphs, images, and links, allowing
          browsers to display them correctly.
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[120%] font-bold">
        Basic Structure of an HTML Document
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Every HTML document follows a basic structure, consisting of essential
          tags that tell the browser how to render the content. Let's break down
          these components:
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[120%] font-bold">
        The &lt;!DOCTYPE html&gt; Declaration
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          The first line in any HTML document is the &lt;!DOCTYPE html&gt;
          declaration. This tells the browser that the document follows the
          HTML5 standard.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[120%] font-bold">
        The &lt;html&gt; Tag
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          The &lt;html&gt; tag is the root element of the document. It contains
          all the content of your webpage.
        </p>
      </div>
      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[120%] font-bold">
        The &lt;head&gt; Section
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          The &lt;head&gt; section includes meta-information about your webpage,
          like the title, character set, and links to stylesheets or scripts.
          Although it doesn’t directly display content, it’s crucial for your
          page’s setup.
        </p>
      </div>
      <h1 className="text-[20px] pl-[80px] max-sm:pl-[0] mt-[12px] leading-[120%] font-bold">
        Example:
      </h1>
      <div className="w-[512px] pl-[80px] mt-[20px] max-sm:pl-0 max-sm:w-full">
        <CopyableCode code={head} />
      </div>

      <h1 className="text-[24px] pl-[80px] max-sm:pl-[0] mt-[32px] max-[450px]:text-[24px] leading-[120%] font-bold">
        The &lt;body&gt; Section
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] pl-[80px] max-sm:pl-[0] text-[20px] w-[1024px] max-xl:w-full">
          The &lt;head&gt; section contains all the visible content on your
          webpage. This includes text, images, links, and more.
        </p>
      </div>
      <h1 className="text-[20px] pl-[80px] max-sm:pl-[0] mt-[12px] leading-[120%] font-bold">
        Example:
      </h1>
      <div className="w-[512px] pl-[80px] mt-[20px] max-sm:pl-0 max-sm:w-full">
        <CopyableCode code={body} />
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[120%] font-bold">
        Building a Simple HTML Page
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Now that we’ve covered the basics, let’s put everything together and
          build a simple HTML page.
        </p>
      </div>
      <div className="w-[790px] max-lg:w-full max-lg:pl-[0px] pl-[80px] mt-[20px] mb-[10px]">
        <CopyableCode code={page} />
      </div>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          In this example, we start with the &lt;!DOCTYPE html&gt; declaration,
          then add the &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; sections.
          Inside the &lt;body&gt;, we’ve added a heading and a paragraph to
          create a basic webpage.
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[120%] font-bold">
        Recap
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          To summarize, we learned about the essential tags that form the
          structure of an HTML document, including &lt;!DOCTYPE html&gt;,
          &lt;html&gt;, &lt;head&gt;, and &lt;body&gt;. We also built a simple
          webpage using these elements, laying a strong foundation for further
          HTML exploration.
        </p>
      </div>
      <h1 className="text-[30px] mt-[52px] max-[450px]:text-[24px] leading-[120%] font-bold">
        Conclusion
      </h1>
      <div
        className={`${theme === "light" ? "text-[#4a4a4a]" : "text-[#b3b3b3]"}`}
      >
        <p className="mt-[10px] text-[20px] w-[1024px] max-xl:w-full">
          Understanding the basic structure of HTML is the first step in your
          web development journey. With this knowledge, you can start creating
          your own webpages and explore more advanced HTML elements. If you
          found this post helpful, be sure to check out my video tutorial on the
          same topic, and stay tuned for more web development content!
        </p>
      </div>
      <div
        className={`mt-[40px]`}
      >
        <a
          href="https://www.youtube.com/watch?v=PEbsYf6NRa4"
          target="_blank"
          className={`${theme === "light" ? "text-[#32cd32]" : "text-[#2e8b5f]"} hover:underline font-semibold max-sm:underline text-base`}
        >
          Watch my HTML Structure Tutorial on YouTube
        </a>
      </div>
    </section>
  );
}

export default About;
