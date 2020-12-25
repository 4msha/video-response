import React ,{useEffect,useRef ,useState}from "react";
import {useReactMediaRecorder} from "react-media-recorder";
import {FaPlayCircle,FaPause,FaPlay,FaStopCircle} from "react-icons/fa/index";
import {handleWholeUploadVideo} from "../helpers/main";

;


export const VideoRecord=({setShoot})=>{
    const [name, setName] = useState('fuckit')
    const [response, setResponse] = useState('')
   const{
       status,
       startRecording,
       stopRecording,
       mediaBlobUrl,
       pauseRecording,
       resumeRecording,
       previewStream,
   }=useReactMediaRecorder({video:true,blobPropertyBag:{type:"video/mp4"}});
    console.log({mediaBlobUrl,previewStream});
  const [paused,setPaused]=useState(false);
  const onUpdate=async()=>{
      const  file = await fetch(mediaBlobUrl).then(r => r.blob());
      console.log({file});
      const res=handleWholeUploadVideo(file,setResponse);
      setShoot(false);
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
    const [response, setResponse] = useState('')

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
            const key=await handleWholeUploadVideo(file,setResponse)
            console.log({key});
        } else {
            setResponse(`Files needed!`)
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
              <button type='submit' className='btn m-2 ml-0 rounded  p-3 bg-yellow-700 text-white hover:text-yellow-700 hover:bg-yellow-200'>
                  Submit
              </button>
          </form>
      </div>

  )
}