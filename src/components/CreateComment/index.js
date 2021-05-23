import React from 'react';

import { Formik } from 'formik';

import {
    Button,
    Typography,
    TextField, Container, CircularProgress, Box
} from '@material-ui/core';

import useStyles from './styles';
import validationSchema from '../../utils/validationSchema';

const CreateComment = React.memo(({handleSubmit, loading, userName}) => {
    const classes = useStyles();

    // initialize the redux hook
    // const dispatch = useDispatch();

    // use the hook and selector
    // const {loading} = useSelector(commentsSelector);

    // const [userName, setUserName] = useState('');




    return (
        <Container component="section" maxWidth="xs" className={classes.root} >
            <Typography variant="h4" align="center" >
                Add a comment
            </Typography >
            <Formik
                initialValues={{
                    name: '',
                    comment: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      isValid,
                      touched
                  }) => (
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => {
                            if (((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10))) {
                                handleSubmit();
                            }
                        }}
                    >
                        <TextField
                            error={touched.name && Boolean(errors.name)}
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                            id="title"
                            label="Your name"
                            helperText={(touched.name && errors.name)
                                ? errors.name
                                : '  '}
                            name="name"
                            type="text"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="off"

                        />

                        <TextField
                            error={touched.comment && Boolean(errors.comment)}
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                            id="comment"
                            label="Your comment"
                            helperText={(touched.comment && errors.comment)
                                ? errors.comment
                                : '  '}
                            name="comment"
                            autoComplete="off"
                            type="text"
                            value={values.comment}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            rowsMax={10}
                        />
                        <Box component="div" className={classes.wrapperButton} >
                            <Button
                                fullWidth
                                disabled={!isValid}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                size="large"
                            >
                                Publish
                            </Button >
                            {userName && loading && <CircularProgress
                                thickness={5}
                                size={36}
                                color="secondary"
                                className={classes.preloader} />}
                        </Box >
                    </form >
                )}

            </Formik >
        </Container >
    );
});

export default CreateComment;
