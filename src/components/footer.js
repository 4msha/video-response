import React,{useState} from "react";
import {FaFacebook, FaInstagram, FaLinkedin,FaHome,FaBlenderPhone,FaVoicemail,FaAtlas} from "react-icons/fa/index";
import {TextInput} from "./textInput";

export const Footer =()=>{
    const [email,setEmail]=useState(null);
    const [review,setReview]=useState(null);
    return(
        <div className=" bg-yellow-100 p-12 px-32">
            <div className="mb-4">
                <div className="sm:w-1/4 ml-0 lg:ml-6h-auto">
                    <div className="text-orange mb-2 border-l-4 border-yellow-700 pl-2 mb-5">Follow Us </div>
                        <div className="flex item-center">
                            <div className="hover:text-orange text-grey-darker">
                                <a href="https://www.google.com">
                                    <div className="p-3  mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                                        <FaFacebook/>
                                    </div>
                                </a>
                            </div>
                            <div className="hover:text-orange text-grey-darker">
                                <a href="https://www.google.com">
                                    <div className="p-3  mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                                        <FaInstagram/>
                                    </div>
                                </a>
                            </div>
                            <div className="hover:text-orange text-grey-darker">
                                <a href="https://www.google.com">
                                    <div className="p-3  mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                                        <FaLinkedin/>
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
                    <div className="sm:w-1/2 mt-10 ">
                        <div className="text-orange mb-2 border-l-4 border-yellow-700 pl-2 mb-5">Tell Us How You feel </div>
                        <form className=" max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-1">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password">
                                        Nickname
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-yellow-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                                        id="nick" type="text"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-1">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password">
                                        E-mail
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-yellow-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                                        id="email" type="email"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-1">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password">
                                        Message
                                    </label>
                                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-yellow-700 border border-yellow-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500 h-48 resize-none" id="message"></textarea>

                                </div>
                            </div>
                            <button
                                className="border border-yellow-700 bg-yellow-700 rounded px-2 text-yellow-200"
                                type="button">
                                Send
                            </button>

                        </form>
                    </div>
            </div>
        </div>
    )
}