import { ADD_VIDEO,ADD_ALL_VIDEOS, RESET_STATE } from '../actions';

const initialState = {
    video:[
        "https://media.tenor.com/images/c674ba98c40f6793eaf10a1356c1c36a/tenor.gif"
    ]
};

export const videos = (state = initialState, action) => {
    const $ = (newState) => ({ ...state, ...newState });

    switch (action.type) {
        case RESET_STATE:
            return initialState;

        default:
            return state;
    }
};
