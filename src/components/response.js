import React,{useState,useEffect} from "react";
import {getAllResponse} from "../helpers/apiCall";
import {SideCard} from "./sideCard";

export const Response=({setSelected})=>{
    const [data,setData]=useState([]);
    const handleClick=()=>{
        console.log("handle Click");
    }
    useEffect(()=>{
        async function temp(){
            const res=await getAllResponse();
            console.log({res});
            setData(res.videos);
        }
        temp();
    },[])
    return(
        <div>
            <div className=" m-2 mb-1 border-l-4 border-purple-700 py-1">
                <p className="px-2 font-bold text-gray-700 text-xl">Replies</p>
            </div>
            <div className=" m-2 mb-1 py-1 ">
                {data.map((video,index)=>{
                    return(
                        <div  key={index}>
                            <button onClick={handleClick}>
                                <SideCard {...{video,setSelected}}/>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}