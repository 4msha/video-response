import React,{useEffect} from "react";
import {Auth} from "aws-amplify";
import {VideoRecord,RecordView,VideoDisplay} from "../../components/videoComponent";
import {LeftInfo} from "../../components/LeftChat";

const data=[];

export const DashBoard =()=>{
    return (
        <>
            <div className=" ">
                <div className=" flex ml-auto justify-center h-full">
                    <div className=" w-1/3 border-l border-r border-yellow-700 p-5">
                        <LeftInfo {...{data}}/>
                    </div>
                    <div className="w-1/2 ">
                          <VideoRecord/>
                    </div>
                </div>
            </div>
        </>
    );
}