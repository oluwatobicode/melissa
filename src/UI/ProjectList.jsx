import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function ProjectList({ el }) {
  const { name, detail, link, image } = el;
  console.log(image);
  return (
    <div className="w-[20rem] bg-[#FFFFFF14] p-5 rounded-lg">
      <div className="">
        <h3 className="text-[#fff] font-bold text-[1rem] mb-5">{name}</h3>
        <img src={`${image?.image} `} alt={name} className="mb-2" />
        <p className="text-[#8c8c8c] mb-5">{detail}</p>
        <button className="flex justify-center items-center gap-2">
          <a className="text-[#fff] text-[1rem]" href={link}>
            Check
          </a>
          <FaArrowUpRightFromSquare color="#fff" size="1rem" />
        </button>
      </div>
    </div>
  );
}

export default ProjectList;
