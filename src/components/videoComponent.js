import React ,{useEffect,useRef }from "react";
import {useReactMediaRecorder,ReactMediaRecorder} from "react-media-recorder";
import {FaPlayCircle,FaPause,FaPlay,FaStopCircle} from "react-icons/fa/index";
const videoType="video/webm";

export const VideoRecord=()=>{
   const{
       status,
       startRecording,
       stopRecording,
       mediaBlobUrl,
       pauseRecording,
       resumeRecording,
       previewStream
   }=useReactMediaRecorder({video:true,blobPropertyBag:{type:"video/mp4"}});

   return(
       <div className="p-3">
           <div className="flex justify-center">
               <button  className="m-2 p-2 border rounded-full border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={startRecording}><FaPlayCircle className=" w-8 h-8"/></button>
               <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={stopRecording}><FaStopCircle className=" w-8 h-8"/></button>
               <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={pauseRecording}><FaPause className=" w-8 h-8"/></button>
               <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={resumeRecording}><FaPlay className=" w-8 h-8"/></button>
           </div>
           {
               (status!=="recording")?(
                   <video src={mediaBlobUrl} controls autoPlay loop className="w-full"/>
               ):(
                   <VideoPreview stream={previewStream} className="w-full"/>
               )
           }
       </div>
   )
}


const VideoPreview = ({ stream }) => {
        const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    if (!stream) {
        return null;
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

