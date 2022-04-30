import React from 'react';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
    const year = new Date().getFullYear(); 
    return (
      <footer className="text-center bg-gray-900 text-white">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6 space-x-2">
            <BsFacebook className="w-9 h-9"></BsFacebook>
            <AiFillTwitterCircle className="w-10 h-10"></AiFillTwitterCircle>
            <AiFillGoogleCircle className="w-10 h-10"></AiFillGoogleCircle>
            <AiFillInstagram className="w-10 h-10"></AiFillInstagram>
            <BsLinkedin className="w-9 h-9"></BsLinkedin>
          </div>

          <div>
            <form action="">
              <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p className="">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="md:mb-6">
                  <input
                    type="text"
                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                </div>

                <div className="md:mr-auto mb-6">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Company
              </h2>
              <ul class="text-gray-300">
                <li class="mb-4">
                  <a href="#!" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Legal
              </h2>
              <ul class="text-gray-300">
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Licensing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Download
              </h2>
              <ul class="text-gray-300">
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    iOS
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Windows
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                More
              </h2>
              <ul class="text-gray-300">
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Service & Repairs
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    FAQ & Support
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Research Articles
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#!" class="hover:underline">
                    Warranties & MaxCare®
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {year} Copyright:
          <a
            rel="noreferrer"
            target="_blank"
            className="text-white"
            href="https://web.facebook.com/bogura.rahad/"
          >
            Rahad Khan
          </a>
        </div>
      </footer>
    );
};

export default Footer;