import {Storage}from "aws-amplify";
import {getStore} from "../common/reducers";
import storage from "localforage";
const { store } = getStore(storage);

export const getVideoFromS3=async(key)=>{
    Storage.get("Screencast from 15-11-20 11:18:56 PM IST.webm",{contentType:"video/webm"} )
        .then(res => {
            console.log({res});
            return (res);
        })

}

export const putVideoOnS3=async(name,file,setResponse)=>{
    console.log({name,file});
    const result=await Storage.put(name,file,{
        level:"public/",
        ACL:"public-read",
        contentType:file.type
    });
    const key=result.key;
    console.log("fuck we did it");
    console.log(result)
    setResponse(result);
    return (key);
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener('click', clickHandler);
        }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    console.log({a});
    return a;
}