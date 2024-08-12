import React, { useState, useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Form() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });
  const [firstNameGive, setFirstNameGive] = useState(true);
  const [lastNameGive, setLastNameGive] = useState(true);
  const [Emailgive, setEmailgive] = useState(true);
  const [submit, setsubmit] = useState(false);
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formData.FirstName === "") {
      setFirstNameGive(false);
    } else {
      setFirstNameGive(true);
    }
    if (formData.LastName === "") {
      setLastNameGive(false);
    } else {
      setLastNameGive(true);
    }
    if (formData.Email === "") {
      setEmailgive(false);
    } else {
      setEmailgive(true);
    }
    if (
      formData.FirstName !== "" &&
      formData.LastName !== "" &&
      formData.Email !== ""
    ) {
      setsubmit(true);
    }
  };
  return (
    <section
      className={`${
        theme === "light"
          ? "text-[#e0e0e0] bg-[#121212]"
          : "text-[#000] bg-[#e5e5e5]"
      }   px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pt-[51px] max-lg:pb-[151px] flex max-lg:flex-col max-lg:gap-[52px] max-lg:items-center justify-between py-[101px]`}
    >
      <h1 className="text-[36px] max-lg:text-center capitalize leading-[120%] font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        aut.
      </h1>
      <form
        className={`w-[560px] max-md:w-full max-xl:w-[480px] relative transition-all duration-300 flex flex-col gap-[20px] ${
          theme === "light"
            ? "text-black bg-white"
            : "text-[#e0e0e0] bg-[#121212] shadow-[0px_0px_40px_#00000066] hover:shadow-[0px_0px_40px_#000000]"
        } px-[20px] py-[24px] rounded-[13px]`}
        action=""
      >
        <div className="flex max-md:flex-col gap-[20px]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor=""
                className={`${
                  firstNameGive
                    ? `${theme === "light" ? "text-black" : "text-[#e0e0e0]"}`
                    : ` ${theme === "light" ? "text-[red]" : "text-[blue]"}`
                }`}
              >
                First Name:
              </label>
              {firstNameGive === false && (
                <span
                  className={`${
                    theme === "light" ? "text-[red]" : "text-[blue]"
                  }`}
                >
                  required*
                </span>
              )}
            </div>
            <input
              type="text"
              onChange={HandleChange}
              name="FirstName"
              placeholder="Enter Your First Name"
              className={
                firstNameGive
                  ? `${
                      theme === "light"
                        ? "border-black"
                        : "border-white bg-[#121212] placeholder:text-[#e0e0e0]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                  : `${
                      theme === "light"
                        ? "border-[red] placeholder:text-[red]"
                        : "bg-[#121212] border-[blue] placeholder:text-[blue]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
              }
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor=""
                className={`${
                  lastNameGive
                    ? `${theme === "light" ? "text-black" : "text-[#e0e0e0]"}`
                    : ` ${theme === "light" ? "text-[red]" : "text-[blue]"}`
                }`}
              >
                Last Name:
              </label>
              {lastNameGive === false && (
                <span
                  className={`${
                    theme === "light" ? "text-[red]" : "text-[blue]"
                  }`}
                >
                  required*
                </span>
              )}
            </div>{" "}
            <input
              type="text"
              name="LastName"
              onChange={HandleChange}
              placeholder="Enter Your Last Name"
              className={
                lastNameGive
                  ? `${
                      theme === "light"
                        ? "border-black"
                        : "border-white bg-[#121212] placeholder:text-[#e0e0e0]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                  : `${
                      theme === "light"
                        ? "border-[red] placeholder:text-[red]"
                        : "bg-[#121212] border-[blue] placeholder:text-[blue]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
              }
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <label
              htmlFor=""
              className={`${
                Emailgive
                  ? `${theme === "light" ? "text-black" : "text-[#e0e0e0]"}`
                  : ` ${theme === "light" ? "text-[red]" : "text-[blue]"}`
              }`}
            >
              Email:
            </label>
            {Emailgive === false && (
              <span
                className={`${
                  theme === "light" ? "text-[red]" : "text-[blue]"
                }`}
              >
                required*
              </span>
            )}
          </div>{" "}
          <input
            type="text"
            name="Email"
            onChange={HandleChange}
            placeholder="Enter Your Email"
            className={
              Emailgive
                ? `${
                    theme === "light"
                      ? "border-black"
                      : "border-white placeholder:text-[#e0e0e0] bg-[#121212] "
                  } border-[1px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                : `${
                    theme === "light"
                      ? "border-[red] placeholder:text-[red]"
                      : "bg-[#121212] border-[blue] placeholder:text-[blue]"
                  } border-[1px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone Number:</label>
          <input
            type="text"
            name="PhoneNumber"
            onChange={HandleChange}
            placeholder="Enter Your Phone Number"
            className={`${
              theme === "light"
                ? "border-black"
                : "border-white placeholder:text-[#e0e0e0] bg-[#121212] "
            } border-[1px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`}
          />
        </div>
        <div>
          <label htmlFor="">Message:</label>
          <textarea
            name="Message"
            id=""
            onChange={HandleChange}
            placeholder="Enter Your Message"
            className={`${
              theme === "light"
                ? "border-black"
                : "border-white placeholder:text-[#e0e0e0] bg-[#121212] "
            } text-[#black] border-black
                 border-[1px] h-[120px] mt-[6px] w-full resize-none pl-[12px] py-[7px] rounded-[7px]`}
          ></textarea>
        </div>
        <button
          onClick={HandleSubmit}
          className={`${
            theme === "light"
              ? " border-[#121212] hover:text-[#e0e0e0] text-[#000000] hover:bg-[#121212] bg-[#ffffff]"
              : "border-[#e0e0e0] hover:text-[#000] text-[#e0e0e0] hover:bg-[#fff] bg-[#121212]"
          }  border-[1px] transition-all duration-300 py-[12px] px-[35px] rounded-[5px]`}
        >
          Submit
        </button>
        {submit && (
          <div
            className={`${
              theme === "light" ? "text-[#000000] bg-[#ffffff]" : "text-[#fff] bg-[#000]"
            }  absolute max-lg:left-0 max-lg:bottom-[-100px] max-lg:w-full max-lg:pl-[16px] left-[-220px] bottom-[0px] shadow-[0px_0px_50px_#00000033] h-[80px]  flex items-center rounded-[13px] w-[200px] text-center`}
          >
            Your Form Have been Submitted
          </div>
        )}
      </form>
    </section>
  );
}

export default Form;
