import React,{useState,useEffect} from "react";
import {getAllAudios, getAllResponse, getAllText} from "../helpers/apiCall";
import {SideCard} from "./sideCard";

export const Response=({setSelected})=>{
    const [data,setData]=useState([]);
    // const [audios,setAudios]=useState([]);
    // const [texts,setTexts]=useState([]);
    const handleClick=()=>{
        console.log("handle Click");
    }
    useEffect(()=>{
        async function temp(){
            const res=await getAllResponse();
            console.log({res});
            res.forEach((temp)=>{
                setData(arr => [...arr, temp]);
            });
            const aud= await getAllAudios();
            console.log({aud});

            aud.forEach((temp)=>{
                setData(arr => [...arr, temp]);
            });
            const tex=await getAllText();
            console.log({tex});
            tex.forEach((temp)=>{
                setData(arr => [...arr, temp]);
            });
            // res.texts.map((temp)=>{
            //     setData(arr => [...arr, temp]);
            // });
            // console.log({audios,data,texts});

        }
        temp().then((res)=>console.log(res)).catch((err)=>console.error(err));
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
                {/*{audios.map((video,index)=>{*/}
                {/*    return(*/}
                {/*        <div  key={index}>*/}
                {/*            <button onClick={handleClick}>*/}
                {/*                <SideCard {...{video,setSelected}}/>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
                {/*{texts.map((video,index)=>{*/}
                {/*    return(*/}
                {/*        <div  key={index}>*/}
                {/*            <button onClick={handleClick}>*/}
                {/*                <SideCard {...{video,setSelected}}/>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        </div>
    )
}