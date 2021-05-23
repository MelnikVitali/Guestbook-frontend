import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    CircularProgress,
    Container, Fab, Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ScrollTop from './ScrollTop';

import Comment from '../Comment';

import {
    commentsSelector,
    fetchAllComments, fetchCreateComment,
    fetchDeleteComment
} from '../../slices/commentsSlice';

import useStyles from './styles';
import CreateComment from '../CreateComment';

const Comments = React.memo((props) => {
    const classes = useStyles();

    // initialize the redux hook
    const dispatch = useDispatch();

    // use the hook and selector
    const {comments, loading} = useSelector(commentsSelector);

    const [removedComment, setRemovedComment] = useState('');
    const [createdComment, setCreatedComment] = useState('');

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(fetchAllComments());
    }, [dispatch, removedComment, createdComment]);

    const addComment = useCallback(async (values, resetForm) => {
        resetForm({values: {...values, comment: ''}});

        await dispatch(fetchCreateComment(values));

        await setCreatedComment(values);
    }, [dispatch]);

    const removeComment = useCallback(async (id, name) => {
        await dispatch(fetchDeleteComment(id, name));

        await setRemovedComment(id);
    }, [dispatch]);

    return (
        <>
            <CreateComment
                handleSubmit={addComment}
                userName={createdComment.name}
                loading={loading}
            />
            <Container component="section" maxWidth="md" className={classes.root} >
                <Typography variant="h4" align="center" >
                    Comments
                </Typography >
                {comments && comments.length > 0
                    ? comments.map(comment => {
                        return <Comment
                            key={comment._id}
                            comment={comment}
                            userName={createdComment.name}
                            removeComment={removeComment}
                        />
                    })
                    : !loading ?
                        <Alert variant="outlined" severity="info" color="info" className={classes.alertInfo} >
                            No comments!
                        </Alert >
                        : <div >
                            <p style={{textAlign: 'center'}} >Loading...</p >
                            <CircularProgress
                                hickness={5}
                                size={32}
                                color="secondary"
                                className={classes.preloader}
                            />
                        </div >
                }

            </Container >

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top" >
                    <KeyboardArrowUpIcon />
                </Fab >
            </ScrollTop >
        </>

    );
});

export default Comments;