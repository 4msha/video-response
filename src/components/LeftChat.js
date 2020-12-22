import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa/index";
import {SideCard} from "./sideCard";
import {AccountInfo} from "./accountInfo";

const routes=[
    "Acoount info",
    "Import",
    "export "
]

export const LeftInfo=({data})=>{
    return(
        <>
            <AccountInfo{...{ routes}} />
            <div className=" m-2 mb-1 border-l-4 border-yellow-700 py-1">
                <p className="px-2 font-bold text-gray-700 text-xl">Follow Us</p>
            </div>
            <div className="flex border-b border-yellow-700 py-2">
                <div className="p-3  mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                    <FaFacebook/>
                </div>
                <div className="p-3 mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                    <FaInstagram/>
                </div>
                <div className="p-3  mx-2  border rounded-full border-yellow-700 text-yellow-700 ">
                    <FaInstagram/>
                </div>
                <div className="p-3 mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                    <FaLinkedin/>
                </div>
                <div className="p-3 mx-2 border rounded-full border-yellow-700 text-yellow-700 ">
                    <FaLinkedin/>
                </div>
            </div>
            <div className=" m-2 mb-1 border-l-4 border-yellow-700 py-1">
                <p className=" px-2 font-bold text-gray-700 text-xl">Chats</p>
            </div>
            <div>
                {data.map((product,index)=>{
                    return(
                        <div key={product.id}>
                            <SideCard {...{product}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}