import React from 'react';

import { CssBaseline, Toolbar } from '@material-ui/core';

import Header from './components/Header';
import Comments from './components/Comments';
import Copyright from './components/Copyright';

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Toolbar id="back-to-top-anchor" />
            <Comments />
            <Copyright />
        </>
    );
}

export default App;
