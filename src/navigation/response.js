import React from 'react';
import { Router } from '@reach/router';
import {ResponsePage} from "../screens/responsePage";
export const ResponseRoute = () => {
    return (
        <>
            <Router>
                <ResponsePage path="/response/:userId/:videoId" />
            </Router>
        </>
    );
};
