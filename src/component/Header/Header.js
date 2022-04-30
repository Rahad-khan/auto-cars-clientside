import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:w-11/12 p-4 md:p-0 mx-auto">
      <nav className="sm:py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <p className="text-4xl font-semibold flex">
              Auto
              <span className="whitespace-nowrap text-red-600 flex items-center">
                Cars <AiFillCar className="mt-1"></AiFillCar>
              </span>
            </p>
          </Link>
          <button onClick={() => setOpen(!open)} className="block md:hidden">
            {open ? (
              <ImCross className="text-red-600" />
            ) : (
              <CgMenu className="text-2xl font-extraboldbold text-red-600" />
            )}
          </button>
          <div
            className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
              <li className="mb-2">
                <CustomLink to="/home">Home</CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink to="/blog">Blog</CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink to="/about">About Me</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
