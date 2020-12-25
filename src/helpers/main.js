import {addVideoToDb, getVideoNo, updateCurrentCount} from "./apiCall";
import {putVideoOnS3} from "./s3";
import {getStore} from "../common/reducers";
import storage from "localforage";
const { store } = getStore(storage);
const base_url="https://videoresponse8f57af0f93e4411cb8498bf8a7e57c43152131-dev.s3.ap-south-1.amazonaws.com/public/";


export const handleWholeUploadVideo=async(file,setResponse)=>{
    const count=await getVideoNo();
    console.log({count});
    let currentCount=count.currentCount;
    const maxCount=count.maxCount;
    console.log("inside main",{currentCount,maxCount});
    if(currentCount<maxCount){
        const n=currentCount.toString();
        const folder=store.getState().auth.user.username;
        const name=folder+"/"+n;
        const url=base_url+name;
        const res=await putVideoOnS3(name,file,setResponse);
        console.log({url});
        const input={
            content:"default",
            url:url,
            userID:store.getState().auth.user.id,
        }
        const data=await addVideoToDb(input);
        console.log({res,data});
        currentCount++;
        const data2=await updateCurrentCount(currentCount,store.getState().auth.user.id);
        console.log({data2});
    }
    return 1;
 }