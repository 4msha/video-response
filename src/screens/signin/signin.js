import React, {useEffect} from "react";
import { withAuthenticator } from '@aws-amplify/ui-react'
import {API, Auth} from 'aws-amplify'
import { useDispatch } from 'react-redux';

const SignIn=()=> {
    const dispatch=useDispatch();
    useEffect(()=> {
        const user = Auth.currentUserInfo();
        console.log({user});
    });
        // API.graphql({query:createUser,variables:{id:result.id,username:result.username}});
    return(
        <>
            <h1>u have successfully signed in </h1>
            </>
    );
  }
  
  export default withAuthenticator(SignIn);