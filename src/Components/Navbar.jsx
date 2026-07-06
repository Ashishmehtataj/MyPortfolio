import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  },[])

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20' data-aos ='fade-down'  >
      <span className='text-4xl font-bold tracking-wide'>Portfolio</span>

      <ul
        className={`${menu ? "block" : "hidden"} mx-24 py-2 text-2xl mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home"><li className='text-md transition-all duration-700 p-1 md:p-0 hover:underline hover:scale-105 hover:decoration-yellow-300 hover:underline-offset-6'>Home</li></a>
        <a href="#About"><li className='text-md transition-all duration-700 p-1 md:p-0 hover:underline hover:scale-105 hover:decoration-yellow-300 hover:underline-offset-6'>About</li></a>
        <a href="#Projects"><li className='text-md transition-all duration-700 p-1 md:p-0 hover:underline hover:scale-105 hover:decoration-yellow-300 hover:underline-offset-6'>Projects</li></a>
        <a href="#Skills"><li className='text-md transition-all duration-700 p-1 md:p-0 hover:underline hover:scale-105 hover:decoration-yellow-300 hover:underline-offset-6'>Skills</li></a>
        <a href="#Contact"><li className='text-md transition-all duration-700 p-1 md:p-0 hover:underline hover:scale-105 hover:decoration-yellow-300 hover:underline-offset-6'>Contact</li></a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(true);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
