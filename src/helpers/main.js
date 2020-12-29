import {addVideoToDb, getVideoNo, updateCurrentCount,getVideoResponseNo,updateCurrentCountVideo,uploadAudioToDb,uploadTextToDb} from "./apiCall";
import {putVideoOnS3} from "./s3";
import {getStore} from "../common/reducers";
import storage from "localforage";
import {base_url} from "./constant";

const { store } = getStore(storage);

export const handleWholeUploadVideo=async(file,content,title)=>{
    console.log("inside handle whole video upload");
    const count=await getVideoNo();
    console.log({count});
    let currentCount=count.currentCount;
    const maxCount=count.maxCount;
    console.log("inside main",{currentCount,maxCount});
    if(currentCount<maxCount){
        const n=currentCount.toString();
        const folder=store.getState().auth.user.id;
        const name=folder+"/"+n+"/"+n;
        const url=base_url+name;
        const res=await putVideoOnS3(name,file);
        console.log({url});
        const input={
            content:content,
            token:currentCount,
            userID:store.getState().auth.user.id,
            maxCount:20,
            currentCount:1,
            name:title,
            type:"main",
            parentToken: 0
        }
        const data=await addVideoToDb(input);
        console.log({res,data});
        currentCount++;
        const data2=await updateCurrentCount(currentCount,store.getState().auth.user.id);
        console.log({data2});
    }
    return 1;
 }

export const handleVideoResponse =async(userId,videoId,title,content,file)=> {

    console.log({videoId,userId,title,content,file},"inside handle video  response");
    const count =await  getVideoResponseNo(videoId);
    let currentCount = count.currentCount;
    const maxCount = count.maxCount;
    const token = count.token;
    console.log({maxCount,currentCount});
    if (currentCount < maxCount) {
        console.log("indide if");
        const name = userId + "/" + token.toString() + "/response/" + currentCount.toString();
        const url = base_url + name;
        const res = await putVideoOnS3(name, file)
        console.log({url, res});
        const input = {
            content: content,
            token: currentCount,
            userID: store.getState().auth.user.id,
            maxCount: 20,
            currentCount: 1,
            name: title,
            type: "response",
            parentToken:token,
        }
        const data = await addVideoToDb(input);
        console.log({res, data});
        currentCount++;
        const data2 = await updateCurrentCountVideo(currentCount, videoId);
        console.log({data2});
        return (data);
    }else{
        console.log("inside else")
    }
}

export const handleAudioResponse=async(userId,videoId,title,content,file)=>{
    const count= await getVideoResponseNo(videoId);
    let currentCount=count.currentCount;
    const maxCount=count.maxCount;
    const token=count.token;
    if(currentCount<maxCount){
        const name=userId+"/"+token.toString()+"/response/"+currentCount.toString();
        const url=base_url+name;
        const res=await putVideoOnS3(name,file);
        console.log({url,res});
        const input={
            content:content,
            token:currentCount,
            videoID:videoId,
            name:title,
        }
        const data=await uploadAudioToDb(input);
        currentCount++;
        const data2=await updateCurrentCountVideo(currentCount,videoId);
        console.log({data2});
    }
}

export const handleTextUpload=async(title,content,videoId)=>{
    const count= await getVideoResponseNo(videoId);
    let currentCount=count.currentCount;
    const maxCount=count.maxCount;
    console.log({maxCount,currentCount});
    if(currentCount<maxCount){
        const input={
            content:content,
            videoID:videoId,
            name:title,
        }
        const res=await uploadTextToDb( input);
        console.log({res});
        currentCount++;
        const data2=await updateCurrentCountVideo(currentCount,videoId);
        console.log({data2});
        return (res);
    }
}
