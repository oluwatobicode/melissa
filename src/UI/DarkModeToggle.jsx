import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkMode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className="px-3 py-3 dark:bg-[#FFFFFF14] bg-[#9277FF] transition-colors duration-150 ease-in-out rounded-full"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun
          className="dark:text-[#AA7DCE] text-[#fff] transition-colors duration-150 ease-in-out"
          size="35px"
        />
      ) : (
        <HiOutlineMoon
          className="dark:text-[#AA7DCE] text-[#fff] transition-colors duration-150 ease-in-out"
          size="35px"
        />
      )}
    </button>
  );
}

export default DarkModeToggle;
