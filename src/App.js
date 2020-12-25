import React from 'react';
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
import {NavbarComponent} from "./components/navbar";

const { store, persistor } = getStore(storage);

window.persistor = persistor;
window.storage = getStorage(window.localStorage);
window.css = css;

const isAuth=true;


const App = () => {
const state=store.getState();
console.log({state});
return(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <>
                {isAuth?<PrivateRoutes />:<PublicRoutes />}
            </>
        </PersistGate>
    </Provider>
    )
};

export default App;