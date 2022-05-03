import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] =
      useSendPasswordResetEmail(auth);
 const emailRef = useRef('')
  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email,password);
  };
  const handleResetPassword =  (e) => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("Sent email successfully !!!");
    } else {
      toast("Enter Your Email Address First");
    }
    console.log("object", email);
    
  }
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // error message
  let errorMessage;
  let processing;
  //   If give error
  if (error) {
    errorMessage = <p className="text-red-700 mb-4">{error?.message}</p>;
  }
  //   If loading
  if (loading || sending) {
    errorMessage = "";
    processing = <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }


  return (
    <div className="w-full my-16 flex items-center justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full md:w-1/3">
        <form onSubmit={handleLogIn}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
            ref={emailRef}
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
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
          </div>
          {errorMessage}
          {processing}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg
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
      ease-in-out"
          >
            Log In
          </button>
        </form>
        <p className="text-gray-800 mt-2 text-center">
          Forget Password?
          <button
            onClick={handleResetPassword}
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
          >
            Reset Your Password
          </button>
        </p>
        <p className="text-gray-800 mt-2 text-center">
          Not a member?
          <Link to="/register">
            <button className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1">
              Register
            </button>
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
