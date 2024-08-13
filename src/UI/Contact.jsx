import { SiLinktree } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="px-10 py-5 leading-0 w-full" id="contact">
      <h2 className="dark:text-[#fff] text-[2rem] mb-10 w-fit md:text-left text-center font-bold">
        Contact Me
      </h2>
      <p className="dark:text-[#8c8c8c] text-[1.3rem] mb-5">
        Do you need a project 🤔?
      </p>

      <div className="flex gap-2">
        <button className="px-3 py-3  dark:bg-[#FFFFFF14] bg-[#9277FF]  rounded-full">
          <a href="mailto:onwukamelissa@gmail.com" target="blank">
            <MdEmail className="dark:text-[#AA7DCE] text-[#fff]" size="40px" />
          </a>
        </button>

        <button className="px-3 py-3  dark:bg-[#FFFFFF14] bg-[#9277FF] rounded-full">
          <a href="http://linkedin.com/in/melissaonwuka" target="blank">
            <FaLinkedin
              className="dark:text-[#AA7DCE] text-[#fff]"
              size="40px"
            />
          </a>
        </button>

        <button className="px-3 py-3 dark:bg-[#FFFFFF14] bg-[#9277FF] rounded-full">
          <a href="https://linktr.ee/mellyyy_" target="blank">
            <SiLinktree
              // color="#AA7DCE"
              size="40px"
              className="dark:text-[#AA7DCE] text-[#fff]"
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
