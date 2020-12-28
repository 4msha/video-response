import React, {useState} from "react";
import {FaCross, FaShare} from "react-icons/fa/index";
import {VideoRecord} from "./videoComponent";
import {base_url, host_url} from "../helpers/constant";
import {getStore} from "../common/reducers";
import storage from "localforage";
const { store } = getStore(storage);


export const SideCard=({video,setSelected}) =>{
    const [share,setShare]=useState(false);
    const handleShare=()=>{
        setShare(true)
    }
    const handleCross=()=>{
        setShare(false);
    }

    const handleOnCLick=()=>{
        let url;
        console.log({video});
        if(video.type==="main"){
            url=base_url+video.userID+"/"+video.token+"/"+video.token;
        }else{
            url=base_url+video.userID+"/2/response/"+video.token;
        }
      setSelected(url);
        console.log({url})
    }
    const link=host_url+store.getState().auth.user.id+"/"+video.id;

    return(
        <>
            {share?(
                <div className={`${share?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                          <button onClick={handleCross} className="rounded-full m-1  ml-5 mt-5 p-2 px-3 text-white bg-purple-700 ">
                              x
                          </button>
                           <div className=" m-12">
                               <p className="text-lg text-black  ">Share this link </p>
                               <a href={link} className="text-purple-700 text-lg ">{link} </a>
                           </div>

                        </div>
                    </div>
                </div>
            ):<div className="hidden"> </div>}
            <div onClick={handleOnCLick} className="flex items-center  py-1 whitespace-nowrap">
                <div  className="flex-shrink-0 h-15 w-15  rounded">
                    <img className="h-10 w-10 rounded-full "
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFR-93Yf4QCxRyWSROVSOEDu6F5YH7Rh_1w&usqp=CAU"
                         alt=""/>
                </div>
                <div className="ml-4">
                    <div className="text-md font-medium text-gray-900">
                        {video.name}
                    </div>
                </div>
                {(video.type==="main")?(
                    <button className=" pl-auto ml-auto pl-12" onClick={handleShare}>
                        <FaShare/>
                    </button>
                ):(
                    <div className="hidden"></div>
                )}

            </div>
            </>
    );
}