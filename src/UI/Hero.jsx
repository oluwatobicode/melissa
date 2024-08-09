function Hero() {
  return (
    <div className="w-full">
      <div className="py-10 flex text-center flex-col items-center justify-center ">
        <h1 className="text-[#fff] text-[2rem] font-bold mb-2 md:text-[3.5rem]">
          Melissa Onwuka
        </h1>
        <p className="text-[#8c8c8c] md:text-[20px] sm:text-[10px] mb-2">
          Advanced Analyst & Data Scientist
        </p>

        {/* <p className="text-[#fff] text-[20px] mt-10 mb-5">My Resume</p>
        <button className="px-10 py-2 bg-transparent border-white border-[1px] rounded-full text-white">
          <a href="https://docs.google.com/file/d/1V5fXKq9uNKfGU4QC76B1eHiobGAKCpDk/edit?usp=docslist_api&filetype=msword">
            Download
          </a>
        </button> */}
      </div>
    </div>
  );
}

export default Hero;
