import {Storage}from "aws-amplify";

export const  uploadFile =async (fileName,file)=>{
    Storage.put(fileName, file)
        .then (result => console.log(result)) // {key: "test.txt"}
        .catch(err =>{
            console.log("fucked uppp");
            console.log(err);
        });
}

export const getFile=async(fileName)=>{
    const  url= await Storage.get(fileName,{level:'protected' });
    return url;
}