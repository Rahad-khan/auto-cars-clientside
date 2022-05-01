import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Reegister = () => {
  const [activeSubmit, setActiveSubmit] = useState(true);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password)
  } 

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // error message
  let errorMessage;
  let processing;
  //   If give error
  if (error) {
    errorMessage = (
      <p className="text-red-700 mb-4">{error?.message}</p>
    );
  }
  //   If loading
  if (loading) {
    errorMessage = "";
    processing = <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }
  return (
    <div className="w-full my-16 flex items-center justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full md:w-1/3">
        <form onSubmit={handleRegister}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
            name="email"
              type="email"
              className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
            name="password"
              type="password"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                onClick={(e) => setActiveSubmit(!activeSubmit)}
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#!"
                className={`${
                  activeSubmit
                    ? "text-red-300"
                    : "text-blue-600"
                }`}
              >
                terms and conditions
              </a>
            </label>
          </div>
          {processing}
          {errorMessage}
          <button
            disabled={activeSubmit}
            type="submit"
            className={`
            ${
              activeSubmit
                ? "bg-blue-300"
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg"
            }
      w-full
      px-6
      py-2.5
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      transition
      duration-150
      ease-in-out`}
          >
            Register new account
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already hav an account?
            <Link to="/login">
              <button className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out ml-1">
                Login
              </button>
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Reegister;
