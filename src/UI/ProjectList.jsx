import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function ProjectList({ el }) {
  const { name, detail, link, image } = el;
  console.log(image);
  return (
    <div className="w-[20rem] dark:bg-[#FFFFFF14] bg-[#252945] transition-all duration-150 ease-in-out p-5 rounded-lg shadow-2xl">
      <div className="">
        <h3 className="dark:text-[#fff] text-[#AA7DCE] font-bold text-[1rem] mb-5">
          {name}
        </h3>
        <img
          src={`${image?.image} `}
          alt={name}
          className="mb-2 w-[280px] h-[145px]"
        />
        <p className="dark:text-[#8c8c8c] text-[#fff] mb-5">{detail}</p>
        <button className="flex justify-center items-center gap-2">
          <a className="text-[#fff] text-[1rem]" href={link} target="blank">
            Check
          </a>
          <FaArrowUpRightFromSquare color="#fff" size="1rem" />
        </button>
      </div>
    </div>
  );
}

export default ProjectList;
