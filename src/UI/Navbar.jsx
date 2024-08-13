import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <div className="w-full  px-2 py-2 sm:px-28  flex md:justify-between justify-between duration-150 ease-in-out">
      <div className="flex gap-5 dark:bg-[#FFFFFF14] bg-[#9277FF] duration-150 ease-in-out px-7 py-3 text-[#fff] rounded-full ">
        <div className="">
          <a
            href="#projects"
            className="text-lg font-normal hover:text-[#AA7DCE] duration-150 ease-in-out hover:transition-colors hover:font-bold"
          >
            Projects
          </a>
        </div>
        <div className="">
          <a
            href="#contact"
            className="text-lg font-normal hover:text-[#AA7DCE] duration-150 ease-in-out hover:transition-colors hover:font-bold"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="md:flex md:justify-center md:items-center md:gap-10  hidden">
        <button className="px-3 py-3 dark:bg-[#FFFFFF14] bg-[#9277FF] duration-150 ease-in-out rounded-full transition-colors">
          <a href="https://github.com/melly567">
            <FaGithub
              className="dark:text-[#AA7DCE] text-[#fff] transition-colors duration-150 ease-in-out"
              size="35px"
            />
          </a>
        </button>

        <button className="px-3 py-3 dark:bg-[#FFFFFF14] bg-[#9277FF] duration-150 ease-in-out rounded-full transition-colors">
          <a href="mailto:onwukamelissa@gmail.com">
            <MdEmail
              className="dark:text-[#AA7DCE] text-[#fff] transition-colors duration-150 ease-in-out"
              size="35px"
            />
          </a>
        </button>

        <button className="px-3 py-3 dark:bg-[#FFFFFF14] bg-[#9277FF] duration-150 ease-in-out rounded-full transition-colors">
          <a href="http://linkedin.com/in/melissaonwuka">
            <FaLinkedin
              className="dark:text-[#AA7DCE] text-[#fff] transition-colors duration-150 ease-in-out"
              size="35px"
            />
          </a>
        </button>
      </div>

      <DarkModeToggle />
    </div>
  );
}

export default Navbar;
