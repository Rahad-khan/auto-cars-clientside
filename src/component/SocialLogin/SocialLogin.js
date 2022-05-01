import React from 'react';
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialLogin = () => {
    return (
      <div>
        <div className="flex items-center my-4">
          <div style={{ height: "2px" }} className="w-full bg-blue-900"></div>
          <div className="px-3">OR</div>
          <div style={{ height: "2px" }} className="w-full bg-blue-900"></div>
        </div>
        <button
          className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 flex justify-center items-center bg-[#4285F4] hover:bg-[#4285F4]/90"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          {/* <!-- Twitter --> */}
          <BsGoogle className="w-3.5 h-3.5 mr-2"></BsGoogle>
          Continue with Google
        </button>
        <button
          className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#3b5998] hover:bg-[#3b5998]/90"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          {/* <!-- Facebook --> */}
          <FaFacebookF className="w-3.5 h-3.5 mr-2"></FaFacebookF>
          Continue with Facebook
        </button>
      </div>
    );
};

export default SocialLogin;