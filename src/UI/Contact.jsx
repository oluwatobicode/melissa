import { FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="px-10 py-5 leading-0 w-full">
      <h2 className="text-[#fff] text-[2rem] mb-10 w-fit md:text-left text-center font-bold">
        Contact Me
      </h2>
      <p className="text-[#8c8c8c] text-[1.3rem] mb-5">
        Do you need a project 🤔?
      </p>

      <div className="flex gap-2">
        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="mailto:onwukamelissa@gmail.com" target="blank">
            <MdEmail color="#AA7DCE" size="40px" />
          </a>
        </button>

        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="https://www.linkedin.com/melissaonwuka" target="blank">
            <FaLinkedin color="#AA7DCE" size="40px" />
          </a>
        </button>

        <button className="px-3 py-3 bg-[#FFFFFF14] rounded-full">
          <a href="https://www.X.com/mellyyy_o" target="blank">
            <FaTwitter color="#AA7DCE" size="40px" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
