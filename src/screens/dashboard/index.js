import React,{useState} from "react";
import {LeftInfo} from "../../components/LeftChat";
import {Response} from "../../components/response";

export const DashBoard =()=>{
    console.log("dashbord");
    const [url,setUrl]=useState("");
    console.log({url});
    return (
        <>
            <div className=" h-screen bg-gray-100">
                <div className=" lg:flex w-full ml-auto justify-center h-full">
                    <div className=" w-full lg:w-1/6  bg-purple-200 p-5">
                        <LeftInfo {...{setSelected:setUrl,selected:url}}/>
                    </div>
                    <div className="m-2 w-full lg:w-1/6 p-5 bg-gray-100">
                        <Response {...{setSelected:setUrl}}/>
                    </div>
                    <div className=" w-full lg:w-2/3 rounded-lg m-4 ">
                        <video src={url} controls autoPlay loop className="object-cover  rounded-lg w-full h-full"/>
                    </div>
                    {/*<button onClick={temp}>fuck</button>*/}
                </div>
            </div>
        </>
    );
}