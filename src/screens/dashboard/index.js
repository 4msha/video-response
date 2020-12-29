import React,{useState} from "react";
import {LeftInfo} from "../../components/LeftChat";
import {Response} from "../../components/response";
import {AudioPlayer} from "../../components/videoComponent";

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
                        {
                            (url.userId !== undefined) ? (
                                <video src={url.url} controls autoPlay loop className="object-cover  rounded-lg w-full h-full"/>
                            ) : (<div className="hidden">

                            </div>)
                        }
                        {
                            (url.userId === undefined && url.videoId !== undefined && url.token !== undefined)?(
                                // <AudioPlayer {...{src:url.url}}/>
                                <audio src={url.url} autoPlay loop controls  />
                            ):(
                                <div className="hidden">
                                </div>
                            )
                        }
                        {
                            (url.userId === undefined && url.token === undefined)?(
                                <div className="flex justify-center w-full h-full rounded-lg items-center my-auto ">
                                <div className="p-10 my-auto shadow-xl ">
                                    <p className="text-2xl text-purple-700">{url.name}</p>
                                    <p className="text-xl text-purple-700">{url.content}</p>
                                </div>
                                </div>
                            ):(
                                <div className="hidden">
                                </div>
                            )
                        }

                      {/*//  <video src={url.url} controls autoPlay loop className="object-cover  rounded-lg w-full h-full"/>*/}

                    </div>
                    {/*<button onClick={temp}>fuck</button>*/}
                </div>
            </div>
        </>
    );
}