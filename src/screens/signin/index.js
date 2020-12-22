import React from "react";
import SignIn from "./signin";
import Logo from "../../assets/video.svg";

export const SignInPage =()=>{
    return (
        <div className="min-h-full justify-center flex-row bg-orange-200    ">
                <div className="mx-auto">
                    <img src={Logo} className="w-32 mx-auto  h-32 " alt="logo" />
                    <h2 className="mt-6 text-center text-lg md:text-xl  lg:text-3xl leading-9 font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <SignIn className=" -mt-64"/>
            </div>
    );
}

