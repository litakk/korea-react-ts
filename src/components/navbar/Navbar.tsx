import React, { useState } from "react";
import { FiFilter, FiHome } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuFilter } from "react-icons/lu";
import { Checkbox } from "@/components/ui/checkbox";
import "./index.css"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <nav
        className={`h-screen bg-[#2E2E2E] ${
          isOpen ? "w-[300px]" : "w-[54px]"
        } transition-all duration-[400ms] ease-in-out`}
      >
        <div className="header-box flex items-center justify-between bg-[#1F1E1E] py-6 px-4">
          <img
            src="./logoLeft.png"
            alt="logo"
            className={`w-[125px] ${
              isOpen ? "opacity-100" : "opacity-0  hidden"
            }`}
          />
          <RxHamburgerMenu
            size={"18px"}
            color="#F1F2F4"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {isOpen ? (
          <div className="pt-5 px-4">
            <div>
              <div className="flex gap-2 items-center mb-5">
                <FiHome size={"18px"} color="white" />{" "}
                <h1 className="text-lg text-white font-semibold">Меню</h1>
              </div>

              <div className="pl-7">
                <a
                  href="#patient"
                  className="text-white text-[14px] mb-3 block"
                >
                  {" "}
                  Пациенты
                </a>
                <a href="#clinic" className="text-white text-[14px] mb-3 block">
                  Клиники
                </a>
                <a href="#agent" className="text-white text-[14px] mb-3 block">
                  Источники / Агентства
                </a>
                <a
                  href="#coordinator"
                  className="text-white text-[14px] mb-8 block"
                >
                  Координаторы
                </a>
              </div>
              <hr className="shadow-none border-[#646464] mb-5" />

              <div className="flex gap-2 items-center mb-5 ">
                <LuFilter size={"18px"} color="white" />{" "}
                <h1 className="text-lg text-white font-semibold">Фильтр</h1>
              </div>
              <div className="custom-scroll overflow-y-scroll h-[350px]">

              <h3 className="text-white">Статус</h3>
              <label className="flex gap-3 items-center mt-5 cursor-pointer ">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Новое
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Запрос отправлен
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  В процессе
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Забронировал
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Выкупил билеты
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white ">
                  Прибыл
                </span>
              </label>
              <h3 className="text-white mt-9">Координатор</h3>
              <label className="flex gap-3 items-center mt-5 cursor-pointer ">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Новое
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Запрос отправлен
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  В процессе
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Забронировал
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white">
                  Выкупил билеты
                </span>
              </label>
              <label className="flex gap-3 items-center mt-5 cursor-pointer">
                {" "}
                <Checkbox />{" "}
                <span className="font-normal text-[14px] text-white ">
                  Прибыл
                </span>
              </label>
              </div>

            </div>
          </div>
        ) : (
          <div className="px-4 pt-5 cursor-pointer">
            <FiHome size={"18px"} color="white" />{" "}
            <FiFilter color="white" size={"18px"} className="mt-6" />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
