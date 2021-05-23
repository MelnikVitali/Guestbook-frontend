import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import App from './App';

import rootReducer from './slices';

const store = configureStore({reducer: rootReducer});

ReactDOM.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <ToastContainer />
            <App />
        </ThemeProvider >
    </Provider >,
    document.getElementById('root')
);
