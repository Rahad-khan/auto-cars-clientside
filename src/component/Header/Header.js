import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <header className="md:w-11/12 p-4 md:p-0 mx-auto">
      <nav className="sm:py-2.5 rounded ">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-12">
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
          <div className={`w-full md:block ${open ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                <li className="mb-2 md:mb-0">
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li className="mb-2 md:mb-0">
                  <CustomLink to="/blog">Blog</CustomLink>
                </li>
                <li className="mb-2 md:mb-0">
                  <CustomLink to="/about">About Me</CustomLink>
                </li>
              </ul>
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                {user ? (
                  <li className="mb-2 md:mb-0">
                    <button 
                    onClick={() => signOut(auth)}
                    className="md:text-lg md:font-medium">
                      Sign Out
                    </button>
                  </li>
                ) : (
                  <li className="mb-2 md:mb-0">
                    <CustomLink to="/login">Sign In</CustomLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
