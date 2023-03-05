import { useState } from "react";
import { IoHome, IoMenu } from "react-icons/io5";
import Button from "./UI/Button";

const Navbar = ({ activeNavbar, setActiveNavbar }) => {
  const [navVisible, setNavVisible] = useState(false)
  return (
    <nav className="flex relative justify-between items-center px-10 py-5 shadow-md shadow-violet-100 bg-white">
      <div className="flex gap-20">
        <span className="flex items-center text-lg font-semibold gap-1 text-violet-600">
          <IoHome className="text-xl" />
          LivingSpace
        </span>
        <ul className="hidden lg:flex gap-10 items-center">
          <li
            onClick={() => setActiveNavbar(1)}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 1 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Rent
          </li>
          <li
            onClick={() => setActiveNavbar(2)}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 2 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Buy
          </li>
          <li
            onClick={() => setActiveNavbar(3)}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 3 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Sell
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex gap-5">
        <Button className="px-3 py-2">Login</Button>
        <Button className="px-3 py-2" filled={true}>
          Sign up
        </Button>
      </div>
      <IoMenu onClick={()=>setNavVisible(prev=>!prev)} className="inline lg:hidden text-xl text-violet-600" />

      {navVisible && <div className="flex flex-col duration-300 items-start absolute top-full gap-4 z-20 left-0 px-10 pb-3 bg-white w-full lg:hidden shadow-md">
        <ul className="flex gap-2 items-center justify-between w-full">
          <li
            onClick={() => {setActiveNavbar(1); setNavVisible(false)}}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 1 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Rent
          </li>
          <li
            onClick={() => {setActiveNavbar(2); setNavVisible(false)}}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 2 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Buy
          </li>
          <li
            onClick={() => {setActiveNavbar(3); setNavVisible(false)}}
            className={`text-sm font-medium hover:text-violet-600 hover:bg-violet-100 cursor-pointer px-4 py-2 rounded-md ${
              activeNavbar === 3 ? "text-violet-600 bg-violet-100" : ""
            }`}
          >
            Sell
          </li>
        </ul>
        <div className="flex lg:hidden gap-5 w-full">
          <Button className="px-3 py-2 flex flex-grow justify-center">Login</Button>
          <Button className="px-3 py-2 flex flex-grow justify-center" filled={true}>
            Sign up
          </Button>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;
