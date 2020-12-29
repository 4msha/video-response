import React, {useEffect} from "react";
import { withAuthenticator } from '@aws-amplify/ui-react'
import { navigate} from '@reach/router';
import { Auth} from 'aws-amplify'
import { useDispatch } from 'react-redux';
import {USER_SIGN_IN} from "../../common/actions";
import {addUserToDb} from "../../helpers/apiCall";

const SignIn=()=> {
    const dispatch=useDispatch();
    useEffect(()=> {
        async function getUserData(){
            const user = await Auth.currentUserInfo();
            console.log({user});
            const res=await addUserToDb(user);
            dispatch({
                type:USER_SIGN_IN,
                payload:user,
            });
            try {
                await navigate("/dashboard");
               //  window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }
       getUserData().then((res)=>{
           console.log("cool");
       }).catch((err)=>{
           console.log({err});
       });
    },[dispatch]);
        // API.graphql({query:createUser,variables:{id:result.id,username:result.username}});
    return(
        <>
            <h1 className="mx-auto text-2xl text-purple=700">You have successfully Signed In </h1>
        </>
    );
  }
  
  export default withAuthenticator(SignIn);