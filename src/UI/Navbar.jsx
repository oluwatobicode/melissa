import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full  px-2 py-2 sm:px-28  flex md:justify-between justify-center">
      <div className="flex gap-5 bg-[#FFFFFF14] px-7 py-3 text-[#fff] rounded-full ">
        <div className="">
          <a
            href=""
            className="text-lg font-normal hover:text-[#AA7DCE] hover:transition-colors hover:font-bold"
          >
            Projects
          </a>
        </div>
        <div className="">
          <a
            href=""
            className="text-lg font-normal hover:text-[#AA7DCE] hover:transition-colors hover:font-bold"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="md:flex md:justify-center md:items-center md:gap-10  hidden">
        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="https://github.com/melly567">
            <FaGithub color="#AA7DCE" size="35px" />
          </a>
        </button>

        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="mailto:onwukamelissa@gmail.com">
            <MdEmail color="#AA7DCE" size="35px" />
          </a>
        </button>

        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="https://www.linkedin.com/melissaonwuka">
            <FaLinkedin color="#AA7DCE" size="35px" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
