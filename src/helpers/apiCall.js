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
           maxCount:20,
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
    const id=store.getState().auth.user.id;
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