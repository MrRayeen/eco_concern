import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="font-bold text-xl items-center flex w-full py-3 bg-primary z-20">
      <div className="container flex items-center justify-between">
        <picture>
          <img src="eco_logo.png" alt="logo" width={100} height={40} />
        </picture>
        <nav>
            <ul className="flex space-x-11 [&_li_a]:text-xl [&_li_a]:font-regular [&_li_a]:text-[#5C5C5C]">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/news&events" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>News & Events</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "!text-[#41BAE3]" : "hover:text-[#41BAE3] duration-200 ease-in-out"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
      </div>
    </header>
  );
};

export default Header;
