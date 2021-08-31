import React from "react";
import Link from 'next/link'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className="relative">
      <div
        className={
          isOpen
            ? "z-10 grid grid-rows-4 text-center  text-blue-dark items-center bg-white absolute top-0 left-0 right-0"
            : "hidden"
        }
        onClick={toggle}
      >
        <Link href="/" className="p-4 ">
         <a className='p-4'>Home</a>
        </Link>
        <Link href="/" className="p-4 ">
         <a className='p-4'>Login</a>
        </Link>
        <Link href="/" className="p-4 ">
         <a className='p-4'>Register</a>
        </Link>

      </div>
    </div>
  );
};

export default Dropdown;
