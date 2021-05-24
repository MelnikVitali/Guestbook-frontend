import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    CircularProgress,
    Container, Fab, Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Index from '../../shared/ScrollTop';

import Comment from '../Comment';

import {
    commentsSelector,
    fetchAllComments,
    fetchCreateComment
} from '../../slices/commentsSlice';

import CreateComment from '../CreateComment';

import useStyles from './styles';

const Comments = React.memo((props) => {
    const classes = useStyles();

    // initialize the redux hook
    const dispatch = useDispatch();

    // use the hook and selector
    const {comments, loading} = useSelector(commentsSelector);

      const [createdComment, setCreatedComment] = useState('');

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(fetchAllComments());
    }, [dispatch, createdComment]);

    const addComment = useCallback(async (values, resetForm) => {
        resetForm({values: {...values, comment: ''}});

        await dispatch(fetchCreateComment(values));

        await setCreatedComment(values);
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

            <Index {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top" >
                    <KeyboardArrowUpIcon />
                </Fab >
            </Index >
        </>
    );
});

export default Comments;