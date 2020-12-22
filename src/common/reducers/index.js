import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import {auth} from "../reducers/auth";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    const logger = createLogger({});
    middlewares.push(logger);
}

const reducers = combineReducers({
    auth,
});

export const getStore = (storage) => {
    const persistConfig = {
        key: 'root-store-video',
        storage,
        debug: true,
        whitelist: ['auth', ],
    };
    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistedReducer, applyMiddleware(...middlewares));
    const persistor = persistStore(store);
    return { store, persistor };
};