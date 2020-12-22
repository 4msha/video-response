import { USER_AUTHENTICATED, USER_LOGOUT, RESET_STATE,USER_SIGN_IN } from '../actions';
// import {act} from "@testing-library/react";
// import {createUser} from "../../graphql/mutations";
// import { API } from 'aws-amplify';
// import {onCreateUser} from "../../graphql/subscriptions";

const initialState = {
  user: {
    username:null,
    email: null,
    id: null,
  },
  isAuthenticated: false,
  access: null,
};

export const auth =  (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case USER_SIGN_IN:{
      console.log(action.payload);
      return (initialState);
    }
    case USER_AUTHENTICATED: {
      console.log(action.payload);
      return $(initialState);
    }
    case USER_LOGOUT:
      console.log("logoutt");
      return $(initialState);

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
