import React,{useState} from "react";
import {FaFacebook, FaInstagram, FaLinkedin,FaCameraRetro,FaCloudUploadAlt,FaFileUpload} from "react-icons/fa/index";
import {SideCard} from "./sideCard";
import {VideoInput, VideoRecord} from "./videoComponent";
import {AccountInfo} from "./accountInfo";

const routes=[
    "Acoount info",
    "Import",
    "export "
]

export const LeftInfo=({setSelected,selected})=>{
    const [add,setAdd]=useState(false);
    const [upload,setUpload]=useState(false);
    const [shoot,setShoot]=useState(false);
    const handleShoot=()=>{
            console.log("shoot");
            setAdd(!add);
            setShoot(!shoot);
    }
    const data=[];
    const handleUpload=()=>{
        console.log("upload");
        setAdd(!add);
        setUpload(!upload);
    }
    const handleNewUpload=()=>{
        setAdd(!add);
    }
    return(
        <>
            <div className={`${add?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mx-auto sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-xl leading-6 font-medium text-gray-900" id="modal-headline">
                                            Add a video
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-lg text-gray-600">
                                                You can either shoot one or can upload from Local Folder
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" onClick={handleShoot} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                   <p className="text-lg text-white">
                                       Shoot
                                   </p>
                                    <FaCameraRetro className="w-8 h-8"/>
                                </button>
                                <button type="button" onClick={handleUpload} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    <p className="text-lg text-white">
                                        Upload
                                    </p>
                                    <FaCloudUploadAlt className="w-8 h-8"/>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={`${upload?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                <div
                    className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75">

                        </div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <VideoInput {...{setUpload}}/>
                    </div>

                </div>
            </div>
            {shoot?(
                <div className={`${shoot?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <VideoRecord {...{setShoot}}/>
                        </div>
                    </div>
                </div>
            ):<div className="hidden"> </div>}
            <AccountInfo/>
            <div className="flex border-b border-yellow-700 py-2">
                <div className=" m-2 mb-1 border-l-4 border-yellow-700 py-1">
                    <p className="px-2 font-bold text-gray-700 text-xl">Follow Us</p>
                </div>
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
                <p className=" px-2 font-bold text-gray-700 text-xl">Videos</p>
            </div>
            <button onClick={handleNewUpload} >
                <div className=" flex m-2 mb-1  px-2  item-center justify-center p-3 bg-gray-200 py-1">
                    <FaFileUpload className="p-2 w-8 h-8 "/> <p className="text-lg text-black">{"   "} new video</p>
                </div>
            </button>
            <div className=" m-2 mb-1 border-l-4 border-yellow-700 py-1">
                {data.map((product,index)=>{
                    return(
                        <div key={index} onClick={setSelected(product)}>
                            <SideCard {...{product}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}