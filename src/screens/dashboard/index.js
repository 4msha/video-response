import React,{useState} from "react";
import {LeftInfo} from "../../components/LeftChat";
import { getVideoNo} from "../../helpers/apiCall";

export const DashBoard =()=>{
    console.log("dashbord");
    const [url,setUrl]=useState("");
    const songFilePath="fuck.mp4";
    const temp =async()=>{
        const res=await getVideoNo();
    }
    return (
        <>
            <div className=" h-screen">
                <div className=" lg:flex w-full ml-auto justify-center h-full">
                    <div className=" w-full lg:w-1/4 border-l border-r border-yellow-700 p-5">
                        <LeftInfo />
                    </div>
                    <div className=" w-full lg:w-1/4 border-l border-r border-yellow-700 p-5">
                        fuck
                    </div>
                    <div className=" w-full lg:w-1/2 ">
                        <video src={url} controls autoPlay loop className="object-cover w-full h-full"/>
                    </div>
                    <button onClick={temp}>fuck</button>
                </div>
            </div>
        </>
    );
}