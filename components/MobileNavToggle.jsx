import { FaBars } from "react-icons/fa";

const MobileNavToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="md:hidden text-[var(--foreground)] text-2xl p-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaBars />
    </button>
  );
};

export default MobileNavToggle;
