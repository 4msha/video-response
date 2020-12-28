import React,{useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import storage from 'localforage';
import { PersistGate } from 'redux-persist/integration/react';
import './tailwind.output.css';

import { getStore } from './common/reducers';

import { getStorage } from './common/storage/';
import { css } from './styles';

import { PrivateRoutes } from './navigation/private';
import { PublicRoutes } from './navigation/public';
import { Router } from '@reach/router';
import {ResponsePage} from "./screens/responsePage";
import {NavbarComponent} from "./components/navbar";
import {ResponseRoute} from "./navigation/response";

const { store, persistor } = getStore(storage);

window.persistor = persistor;
window.storage = getStorage(window.localStorage);
window.css = css;


const App = () => {
const state=store.getState();
// const [isAuth,setIsAuth]=useState();
console.log({state});
return(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <>
                {state.auth.isAuthenticated || true ?<PrivateRoutes />:<PublicRoutes />}
                <ResponseRoute/>
            </>
        </PersistGate>
    </Provider>
    )
};

export default App;