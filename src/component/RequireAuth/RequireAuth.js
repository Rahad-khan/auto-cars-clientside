import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from "react-toastify";

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] =
      useSendEmailVerification(auth);
    const location = useLocation();
    if(loading || sending){
        return <div className='w- full h-screen flex justify-center items-center'>
            <Loading></Loading>
        </div>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else if (user?.providerData[0]?.providerId === 'password' && (!user?.emailVerified)){
        return (
            <div className="flex justify-center w-full h-screen items-center">
              <div className="block p-10 rounded-lg shadow-lg bg-red-200 max-w-lg">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Your Email is not Verified !!
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Please Verify Your Email First
                </p>
                <button
                  onClick={async () => {
                    await sendEmailVerification();
                    toast("Verification Email Sent");
                  }}
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Verify email
                </button>
              </div>
            </div>
        );
    } 
    return children;
};

export default RequireAuth;