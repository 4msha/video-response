import React ,{useEffect,useRef ,useState}from "react";
import {useReactMediaRecorder} from "react-media-recorder";
import {FaPlayCircle,FaPause,FaPlay,FaStopCircle} from "react-icons/fa/index";
import {handleWholeUploadVideo,handleAudioResponse,handleVideoResponse} from "../helpers/main";
import {TextInput} from "./textInput";
import Visualizer from 'react-audio-visuals'


export const AudioPlayer=(src)=>{
    const audioRef = useRef(null)
    console.log(src);
  return(
      <div>
          <audio src={src.src} ref={audioRef}  />
          <Visualizer audioRef={audioRef} />
      </div>
  )
}

export const AudioRecorder=({setAudio,videoId,userId})=>{
    const [paused,setPaused]=useState(false);
    const [title, setTitle] = useState(null);
    const [content,setContent]=useState(null);
    const{
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        pauseRecording,
        resumeRecording,
        previewStream,
    }=useReactMediaRecorder({video:false,audio:true,blobPropertyBag:{type:"audio/wav"}});

    const handlePause=()=>{
        if(paused){
            resumeRecording();
        }
        else{
            pauseRecording();
        }
        setPaused(!paused);
    }
    const onUpdate=async()=>{
        const  file = await fetch(mediaBlobUrl).then(r => r.blob());
        console.log({file});
        const res= handleAudioResponse(userId,videoId,title,content,file);
        setAudio(false);
    }
    return(
        <div className="p-3">
            <div className="flex justify-center">
                <button  className="m-2 p-2 border rounded-full border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={startRecording}><FaPlayCircle className=" w-8 h-8"/></button>
                {
                    paused ?(
                        <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={handlePause}><FaPlay className=" w-8 h-8"/></button>
                    ):(
                        <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={handlePause}><FaPause className=" w-8 h-8"/></button>
                    )
                }
                <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={stopRecording}><FaStopCircle className=" w-8 h-8"/></button>
                <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={onUpdate}>uploadVideo</button>
            </div>
            <TextInput {...{placeholder:"title",value:title,setValue:setTitle}}/>
            <TextInput {...{placeholder:"Content",value:content,setValue:setContent}}/>
        </div>
    )
}


export const VideoRecord=({setShoot,type,videoId,userId})=>{
    const [title, setTitle] = useState(null);
    const [content,setContent]=useState(null);
   const{
       status,
       startRecording,
       stopRecording,
       mediaBlobUrl,
       pauseRecording,
       resumeRecording,
       previewStream,
   }=useReactMediaRecorder({video:true,audio:true,blobPropertyBag:{type:"video/webm"}});
    console.log({mediaBlobUrl,previewStream});
  const [paused,setPaused]=useState(false);
  const onUpdate=async()=>{
      const  file = await fetch(mediaBlobUrl).then(r => r.blob());
      console.log({file});
      if(type==="main"){
          const res=handleWholeUploadVideo(file,content,title);
      }else{
          console.log("inside else video component ");
          const res=handleVideoResponse(userId,videoId,title,content,file);
      }
      setShoot(false);
      console.log({file},"inside video compoent");
  }

  const handlePause=()=>{
      if(paused){
           resumeRecording();
      }
      else{
          pauseRecording();
      }
      setPaused(!paused);
  }
   return(
       <div className="p-3">
           <div className="flex justify-center">
               <button  className="m-2 p-2 border rounded-full border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={startRecording}><FaPlayCircle className=" w-8 h-8"/></button>
               {
                   paused ?(
                       <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={handlePause}><FaPlay className=" w-8 h-8"/></button>
                   ):(
                   <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={handlePause}><FaPause className=" w-8 h-8"/></button>
                   )
               }
               <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={stopRecording}><FaStopCircle className=" w-8 h-8"/></button>
               <button  className="m-2 p-2 border rounded-full  border-yellow-700 text-yellow-700 hover:text-yellow-100 hover:bg-yellow-700" onClick={onUpdate}>uploadVideo</button>

           </div>
           {
               (status!=="recording")?(
                   <video src={mediaBlobUrl} controls autoPlay loop className="w-full"/>
               ):(
                   <VideoPreview stream={previewStream} className="w-full"/>
               )
           }
           <TextInput {...{placeholder:"title",value:title,setValue:setTitle}}/>
           <TextInput {...{placeholder:"Content",value:content,setValue:setContent}}/>
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

export const VideoInput=({setUpload})=>{
    const [file, setFile] = useState('')
    const [title, setTitle] = useState(null);
    const [content,setContent]=useState(null);


    const onChange = (e) => {
        e.preventDefault()
        if (e.target.files[0] !== null) {
            setFile(e.target.files[0])
        }
    }

    const onSubmit = async(e) => {
        console.log("inside onSubmit");
        e.preventDefault()
        console.log({file});
        if (file) {
            const key=await handleWholeUploadVideo(file,content,title);
            console.log({key});
        }
        setUpload(false);
    }
  return(
      <div className='video-uploader p-12 border border-yellow-700'>
          <form onSubmit={(e) => onSubmit(e)}>
              <p>
                  <label className='select-label'>Select video: </label>
              </p>
              <p>
                  <input
                      className='video-input rounded border border-yellow-700   text-black '
                      type='file'
                      id='file-input'
                      accept='image/*, video/*'
                      onChange={(e) => onChange(e)}
                  />
              </p>
              <TextInput {...{placeholder:"title",value:title,setValue:setTitle}}/>
              <TextInput {...{placeholder:"Content",value:content,setValue:setContent}}/>
              <button type='submit' className='btn m-2 ml-0 rounded  p-3 bg-yellow-700 text-white hover:text-yellow-700 hover:bg-yellow-200'>
                  Submit
              </button>
          </form>
      </div>

  )
}