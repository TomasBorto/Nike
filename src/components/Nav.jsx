import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("max-lg:translate-y-0")
  }

  const checkNavbar = () =>{
      if(navRef.current.classList.contains('max-lg:translate-y-0')){
          navRef.current.classList.toggle("max-lg:translate-y-0")
      }
  }
  
  return (
    <header className='flex padding-x py-8 w-full max-lg:justify-between max-lg:fixed bg-white z-30'>
        <a href='/'>
                <img 
                 src={headerLogo}
                 alt='Logo'
                 width={130}
                 height={30}
                />
        </a>
        <nav className='max-lg:bg-white flex justify-between max-lg:fixed items-center max-container top-0 max-lg:h-full max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:flex-col-reverse max-lg:gap-4 z-50 max-lg:-translate-y-full ease-in-out duration-1000' ref={navRef}>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:flex-col'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={checkNavbar} className='font-montserrat leading-normal text-lg text-slate-gray' >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            <button className="text-[40px] mr-2 max-lg:pt-20 lg:hidden" onClick={showNavbar}>
                    <FaTimes />
            </button>
        </nav>
        <button className=" lg:absolute top-6 right-3 lg:hidden text-[40px] mr-2" onClick={showNavbar}>
                <FaAlignRight />
        </button>
    </header>
  )
}

export default Nav