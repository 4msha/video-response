import React, {useState} from "react";
import {FaCross, FaShare} from "react-icons/fa/index";
import {VideoRecord} from "./videoComponent";
import {base_url, host_url} from "../helpers/constant";
import {getStore} from "../common/reducers";
import storage from "localforage";
import {TextInput} from "./textInput";
const { store } = getStore(storage);


export const SideCard=({video,setSelected}) =>{
    const [share,setShare]=useState(false);
    const [email,setEmail]=useState("");
    const[emailCode,setEmailCode]=useState(false);
    const [name,setName]=useState("");
    const link=host_url+"response/"+store.getState().auth.user.id+"/"+video.id;
    const src=base_url+store.getState().auth.user.id+"/"+video.token+"/"+video.token;

    const hrefLink=src+"?autoplay=true#contact_name="+name+"&contact_email="+email;

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
            url=base_url+store.getState().auth.user.id+"/"+video.parentToken+"/response/"+video.token;
        }

        if(video.userID === undefined){
            url=base_url+store.getState().auth.user.id+"/1/response/"+video.token;
        }
      setSelected({
          url:url,
          userId:video.userID,
          videoId:video.videoID,
          token:video.token,
          name:video.name,
          content:video.content,
      });
        console.log({url})
    }
    const handleEmailCode=()=>{
        setEmailCode(true);
    }
    console.log({hrefLink});
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
                               <div className="p-3 rounded-lg bg-gray-200">
                                   <p className="text-lg text-black  ">Share this link </p>
                                   <a href={link} className="text-purple-700 text-lg ">{link} </a>
                               </div>
                               <div className="p-3 rounded-lg  my-2 bg-gray-200">
                                   {emailCode?(
                                       <div className="p-5 ">
                                           <p className="text-lg text-black">Copy and Paste this code in mail</p>
                                           <p className="text-purple-300 bg-gray-500 rounded-lg overflow-auto h-32">
                                               {" <div className=\"bg-gray-700 m-5 p-2\">\n" +
                                               "                                               <a href="+{hrefLink}+"><img className=\"m-2 p-2 \" src=\"https://images.unsplash.com/photo-1556132877-ded3bb0173b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\" alt=\"sdfsa\" /></a>\n" +
                                               "                                           </div>"}
                                           </p>
                                       </div>
                                   ):(
                                       <div>
                                           <p className="text-lg text-black">Share via email</p>
                                           <div className="p-5 ">
                                               <TextInput {...{placeholder:"name",value:name,setValue:setName}}/>
                                               <TextInput {...{placeholder:"email",value:email,setValue:setEmail}}/>
                                               <button  onClick={handleEmailCode} className="rounded-lg bg-white shadow-lg p-3">Get Code</button>
                                           </div>
                                       </div>
                                   )}
                               </div>

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
                    <button className=" ml-auto" onClick={handleShare}>
                        <FaShare/>
                    </button>
                ):(
                    <div className="hidden"></div>
                )}

            </div>
            </>
    );
}