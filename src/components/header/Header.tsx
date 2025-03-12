import { IoAddCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex w-full justify-between items-center gap-2.5 cursor-pointer p-7">
      <div className="flex gap-2.5 ">
        <IoAddCircleOutline size={"24px"} />
        <p className="font-medium text-[#909090]">Создать пациента</p>
      </div>

      <div className="flex gap-2.5 cursor-pointer">
        <CiSettings size={"24px"} />
        <p className="font-medium text-[#909090]">Настройки</p>
      </div>

      <div>
        <Input className="border-[#898989]" placeholder="Поиск..." />
      </div>

      <div className="flex gap-5 items-center">
        <FiBell />
        <hr className="w-5 h-6 shadow-none border-[#898989] rotate-90" />
        <p>RU</p>
        <IoIosArrowDown />
        <hr className="w-5 h-6 shadow-none border-[#898989] rotate-90" />
       <Link to={"/login"}><img src="./header.png" alt="header-logo" className="w-[24px] h-[21px]" /></Link>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
