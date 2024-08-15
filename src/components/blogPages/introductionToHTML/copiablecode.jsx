import React, { useState, useContext } from "react";
import ThemeContext from "../../../context/themeContext";
const CopyableCode = ({ code }) => {
  const { theme } = useContext(ThemeContext);

  const [copied, setCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy code: ", error);
      });
  };

  return (
    <div
      className={`relative ${
        theme === "light"
          ? "bg-[#f4f4f4] text-[#333333]"
          : "bg-[#2d2d2d] text-[#f8f8f2]"
      } overflow-x-scroll p-[20px] scroll-bar rounded-[5px] mb-[10px]`}
    >
      <pre className="whitespace-prewrap pr-[20px]">{code}</pre>
      <button
        className={`absolute ${
        theme === "light"
          ? "bg-[#32cd32] text-white"
          : "bg-[#2e8b5f] text-black"
      } top-[10px] font-semibold right-[10px] px-[10px] py-[5px] rounded-[5px] cursor-pointer`}
        onClick={copyCodeToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyableCode;
