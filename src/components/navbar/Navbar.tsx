import React, { useState } from "react";
import { FiFilter, FiHome } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)



    return (
        <div>


            <nav className={`h-screen bg-[#2E2E2E] ${isOpen ? "w-[300px]" : "w-[54px]"} transition-all duration-[400ms] ease-in-out`}>
                <div className="header-box flex items-center justify-between bg-[#1F1E1E] py-6 px-4">
                    <img src="/logo.png" alt="logo" className={`w-[120px] ${isOpen ? "opacity-100" : "opacity-0  hidden"}`} />
                    <RxHamburgerMenu size={"18px"} color="#F1F2F4" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                </div>

                {isOpen ? <div className="pt-5 px-4">

                    <div>
                        <div className="flex gap-2 items-center"><FiHome size={"18px"} color="white" /> <h1 className="text-lg text-white font-semibold">Меню</h1></div>

                    </div>

                </div> : <div className="px-4 pt-5 cursor-pointer"><FiHome size={"18px"} color="white" /> <FiFilter  color="white" size={"18px"} className="mt-6"/></div>}

            </nav>


        </div>
    );
}

export default Navbar;
