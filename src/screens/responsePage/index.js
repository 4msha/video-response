import React,{useEffect,useState} from "react";
import {base_url} from "../../helpers/constant";
import {getVideoData} from "../../helpers/apiCall";
import {FaCameraRetro,FaRegFileAudio,FaTextHeight} from "react-icons/fa/index"
import {AudioRecorder, VideoRecord} from "../../components/videoComponent";
import {TextInput} from "../../components/textInput";
import {handleTextUpload, handleWholeUploadVideo} from "../../helpers/main";

export const ResponsePage=(props)=>{
    console.log(props.userId);
    console.log(props.videoId);
    const [url,setUrl]=useState("");
    const [shoot,setShoot]=useState(false);
    const [audio,setAudio]=useState(false);
    const [text,setText]=useState(false);
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const handleShoot=()=>{
        setShoot(true);
    }
    const handleAudio=()=>{
        setAudio(true);
    }

    const handleText=()=>{
        setText(true);
    }
    useEffect(()=>{
        async function getUrl(){
            let res = props.userId.replace(":", "%3A");
            const data=await getVideoData(props.videoId);
            const token=data.data.getVideo.token;
            console.log({token});
            const tempUrl=base_url+res+"/"+token+"/"+token;
            console.log({tempUrl});
            setUrl(tempUrl);
        }
        getUrl();
    },[url]);

    const onSubmit = async(e) => {
        console.log("inside onSubmit");
        e.preventDefault()
        const res=handleTextUpload(title,content,props.videoId);
        console.log({res});
        setText(false);
    }
    return(
        <>
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
                            <VideoRecord {...{setShoot,type:"response",videoId:props.videoId,userId:props.userId}}/>
                        </div>
                    </div>
                </div>
            ):<div className="hidden"> </div>}
            {audio?(
                <div className={`${audio?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                           <AudioRecorder {...{setAudio,videoId:props.videoId,userId:props.userId}}/>
                        </div>
                    </div>
                </div>
            ):<div className="hidden"> </div>}
            {text?(
                <div className={`${text?'fixed z-10 inset-0 overflow-y-auto':'hidden'}`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom   mx-auto bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className='video-uploader p-12 border border-yellow-700'>
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <TextInput {...{placeholder:"title",value:title,setValue:setTitle}}/>
                                    <TextInput {...{placeholder:"Content",value:content,setValue:setContent}}/>
                                    <button type='submit' className='btn m-2 ml-0 rounded  p-3 bg-yellow-700 text-white hover:text-yellow-700 hover:bg-yellow-200'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ):<div className="hidden"> </div>}
        <div className="flex h-screen bg-purple-100">
            <div className="w-1/2 my-auto">
                <div className="flex justify-center ">
                    <p className="text-gray-900 font-bold text-xl pl-auto"> Reply using any of the options below </p>
                </div>
                <div className="flex justify-center item-center">
                    <button  onClick={handleShoot} className="p-8 pb-6 px-10 m-3 rounded bg-purple-500 rounded-lg">
                        <FaCameraRetro className="text-white w-10 h-10"/>
                        <p>Video</p>
                    </button>
                    <button onClick={handleAudio} className="p-8 pb-6 px-10  m-3 rounded bg-purple-500 rounded-lg">
                        <FaRegFileAudio className="text-white w-10 h-10"/>
                        <p>Audio</p>
                    </button>
                    <button  onClick={handleText} className="p-8 pb-6 px-10   m-3  rounded bg-purple-500 rounded-lg">
                        <FaTextHeight className="text-white w-10 h-10"/>
                        <p>Text</p>
                    </button>
                </div>
            </div>
            <div className="w-1/2 m-2">
                <video src={url} controls autoPlay loop className="object-cover  rounded-lg w-full h-full"/>
            </div>
        </div>
    </>
    )
}