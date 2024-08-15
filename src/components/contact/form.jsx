import React, { useState, useContext } from "react";
import ThemeContext from "../../context/themeContext";
import axios from "axios";
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
  const [click, setclick] = useState(false);
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const HandleSubmit = async (e) => {
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
      setclick(true)
      const response = await axios
        .post(
          "https://portfolio-backend-xee8.onrender.com//api/sendMailContact",
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            setsubmit(true);
          }
          console.log(response);
        })
        .catch((error) => {});
    }
  };
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-[#fff] text-black"
          : " bg-[#121212] text-[#e0e0e0]"
      }   px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pt-[51px] max-lg:pb-[151px] flex max-lg:flex-col gap-[52px] max-lg:items-center justify-between py-[101px]`}
    >
      <p className="text-[30px] max-md:text-[25px] max-sm:text-[20px] max-lg:text-center max-sm:text-left capitalize leading-[130%] tracking-[-0.56px] max-sm:tracking-[-0.2px] max-md:tracking-[-0.32px]">
        Feel free to reach out with any questions, opportunities, or
        collaborations. I'm here to help and would love to hear from you!
      </p>
      <form
        className={`w-[560px] max-md:w-full max-xl:w-[480px] relative transition-all duration-300 flex flex-col gap-[20px] ${
          theme === "light"
            ? "bg-white text-black shadow-[0px_0px_40px_#00000033] hover:shadow-[0px_0px_40px_#00000066]"
            : "bg-[#2d2d2d] text-[#f8f8f2]"
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
                        : "border-white bg-[#2d2d2d] placeholder:text-[#e0e0e0]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                  : `${
                      theme === "light"
                        ? "border-[red] placeholder:text-[red]"
                        : "bg-[#2d2d2d] border-[blue] placeholder:text-[blue]"
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
                        : "border-white bg-[#2d2d2d] placeholder:text-[#e0e0e0]"
                    } border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                  : `${
                      theme === "light"
                        ? "border-[red] placeholder:text-[red]"
                        : "bg-[#2d2d2d] border-[blue] placeholder:text-[blue]"
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
                      : "border-white placeholder:text-[#e0e0e0] bg-[#2d2d2d] "
                  } border-[1px] mt-[6px] pl-[12px] py-[7px] rounded-[7px]`
                : `${
                    theme === "light"
                      ? "border-[red] placeholder:text-[red]"
                      : "bg-[#2d2d2d] border-[blue] placeholder:text-[blue]"
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
                : "border-white placeholder:text-[#e0e0e0] bg-[#2d2d2d] "
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
                : "border-white placeholder:text-[#e0e0e0] bg-[#2d2d2d] "
            } text-[#black] border-black
                 border-[1px] h-[120px] mt-[6px] w-full resize-none pl-[12px] py-[7px] rounded-[7px]`}
          ></textarea>
        </div>
        <button
          onClick={HandleSubmit}
          type={click ? 'disable' : 'submit'}
          className={`${
            theme === "light"
              ? " border-[#121212] max-sm:bg-[#121212] max-sm:text-[#fff] hover:text-[#fff] text-[#000000] hover:bg-[#121212] bg-[#ffffff]"
              : "border-[#e0e0e0] hover:text-[#e0e0e0] max-sm:border-[#2d2d2d] max-sm:bg-[#121212] max-sm:text-[#e0e0e0] hover:border-[#2d2d2d] text-[#e0e0e0] hover:bg-[#121212] bg-[#2d2d2d]"
          }  border-[1px] transition-all duration-300 py-[12px] px-[35px] rounded-[5px]`}
        >
          Submit
        </button>
        {submit && (
          <div
            className={`${
              theme === "light"
                ? "text-[#000000] bg-[#ffffff]"
                : "text-[#fff] bg-[#2d2d2d]"
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
