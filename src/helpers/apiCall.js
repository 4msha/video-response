import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {getStore} from "../common/reducers";
import storage from "localforage";
const { store } = getStore(storage);

export const    addUserToDb=async(user)=>{
   const isPresent=await API.graphql({ query: queries.getUser, variables: { id: user.id }});
   if(isPresent.data.getUser===null){
       const userDetails={
           username:user.username,
           id:user.id,
           number:user.attributes.phone_number,
           email:user.attributes.email,
           maxCount:30,
           currentCount:1,
       }
       const res=await API.graphql({ query: mutations.createUser, variables: {input: userDetails}});
       return (res);
   }else{
       console.log("user already in db");
       return(isPresent);
   }

}


export const addVideoToDb=async(input)=>{
    const res=await API.graphql({ query: mutations.createVideo, variables: {input: input}});
    console.log({res});
    return (res);
}

export const getVideoNo=async()=>{
    console.log("inside get video");
    const id=store.getState().auth.user.id;
    console.log(store.getState().auth.user);
    console.log({id});
    const res=await API.graphql({ query: queries.getUser, variables: { id: id }});
    const {data}=res||{data:{}};
    const {getUser}=data||{getUser:{}};
    const {maxCount,currentCount}=getUser||{maxCount:"",currentCount:""};
    console.log({maxCount,currentCount });
    const count={
        maxCount:maxCount,
        currentCount: currentCount
    }
    return (count);
}

export const updateCurrentCount=async(currentCount,id)=>{
    const input={
        id:id,
        currentCount:currentCount
    }
    const res=await API.graphql({ query: mutations.updateUser, variables: {input: input}});
    return (res);

}

export const fetchAllVideo=async()=>{
    const id=store.getState().auth.user.id;
    console.log({id});
    const res=await API.graphql({ query: queries.videoByUserId, variables: { userID:id }});
    console.log({res});
    const {data}=res||{data:{}};
    const {videoByUserId}=data||{videoByUserId:{}};
    const {items}=videoByUserId||{items:{}};
    console.log({data,items});
    const data1=[];
    Array.prototype.forEach.call(items, child => {
        console.log({child});
        if(child.type==="main"){
                    data1.push(child);
                }
    });
    console.log({data1});
    return (data1);
}

export const getVideoResponseNo=async(videoId)=>{
    console.log({videoId}," yeah we r here ");
    const res=await API.graphql({ query: queries.getVideo, variables: { id: videoId }});
    const {data}=res||{data:{}};
    const {getVideo}=data||{getVideo:{}};
    const {maxCount,currentCount,token}=getVideo||{maxCount:"",currentCount:"",token:""};
    console.log({maxCount,currentCount });
    const count={
        maxCount:maxCount,
        currentCount: currentCount,
        token:token,
    }
    return (count);
}

export const getVideoData=async(videoId)=>{
    const res=await API.graphql({ query: queries.getVideo, variables: { id: videoId }});
    return (res);
}
export const updateCurrentCountVideo=async(currentCount,videoId)=>{
    const input={
        id:videoId,
        currentCount:currentCount
    }
    const res=await API.graphql({ query: mutations.updateVideo, variables: {input: input}});
    return (res);
}

export const uploadAudioToDb=async(input)=>{
    const res=await API.graphql({ query: mutations.createAudio, variables: {input: input}});
    console.log({res});
    return (res);
}

export const uploadTextToDb=async(input)=>{
    console.log({input});
    const res=await API.graphql({ query: mutations.createText, variables: {input: input}});
    console.log({res});
    return (res);
}

export const getAllResponse=async()=>{
    const userId=store.getState().auth.user.id;
    const res=await API.graphql({ query: queries.getUser, variables: { id: userId }});
    const items=res.data.getUser.videos.items ||[];
    let response=[];
    let videos=[];
    let audios=items.audios||[];
    console.log({audios});
    let texts=[];
    console.log({items});
    items.forEach((item)=>{
        if(item.type==="response"){
            response.push(item);
        }else{
            videos.push(item);
        }
    });
    console.log("heyeeeeeee");
    console.log(videos.audios);
    return (response);
//     console.log({response,videos});
//     videos.forEach(async(video)=>{
//         const data= await  API.graphql({ query: queries.getVideo, variables: { id: video.id }});
//         const temp1=data.data.getVideo.audios.items;
//         const temp2=data.data.getVideo.texts.items;
//         console.log({temp1,temp2});
//         temp2.forEach((t)=>{
//             texts.push(t);
//         })
//         temp1.forEach((t)=>{
//             audios.push(t);
//         })
//     });
// //.then((res)=>console.log(res)).catch((err)=>console.error(err));
//     console.log({response,audios,texts});
//     const result={
//         videos:response,
//         audios:audios,
//         texts:texts
//     }
//     console.log({result});
//     return (result);
}

export const getAllAudios=async()=>{
    const res=await  API.graphql({ query: queries.listAudios,});
    console.log({res});
    return (res.data.listAudios.items);
}

export const getAllText=async()=>{
    const res=await  API.graphql({ query: queries.listTexts,});
    console.log({res});
    return (res.data.listTexts.items);
}