import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { APIUrls } from '../configs/APIUrls';
import axios from 'axios';

export const initialState = {
    loading: false,
    errorMessage: null,
    comments: [],
    comment: null,
};

// A slice for comments with our 3 reducers
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        startLoading: state => {
            state.loading = true;
        },
        getAllCommentsSuccess: (state, {payload}) => {
            state.comments = payload;
            state.loading = false;
            state.errorMessage = null;
        },
        addCommentSuccess: (state, {payload}) => {
            state.post = payload;
            state.loading = false;
            state.errorMessage = null;
        },
        deleteCommentSuccess: (state, {payload}) => {
            state.loading = false;
            state.errorMessage = null;
        },
        getError: (state, {payload}) => {
            state.loading = false;
            state.errorMessage = payload;
        },
    }
});

// Three actions generated from the slice
export const {
    startLoading, getError, getAllCommentsSuccess,
    addCommentSuccess, deleteCommentSuccess
} = commentsSlice.actions;

// A selector
export const commentsSelector = state => state.comments;

// The reducer
export default commentsSlice.reducer;

// Asynchronous thunk action
export const fetchAllComments = () => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            const response = await axios.get(APIUrls.getAllComments);


            dispatch(getAllCommentsSuccess(response.data));
        } catch (error) {
            dispatch(getError(error?.message));

            toast.error(error?.message);
        }
    }
};

export const fetchCreateComment = () => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            const response = await axios.post(APIUrls.getAllComments);

            dispatch(addCommentSuccess(response.data));
        } catch (error) {
            dispatch(getError(error?.message));

            toast.error(error?.message);
        }
    }
};

export const fetchDeleteComment = () => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            const response = await axios.post(APIUrls.getAllComments);

            dispatch(deleteCommentSuccess(response.data));
        } catch (error) {
            dispatch(getError(error?.message));

            toast.error(error?.message);
        }
    }
};



