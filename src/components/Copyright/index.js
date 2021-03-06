import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Copyright = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                className={classes.root}
            >
                {'Copyright © Guestbook TestTask | Melnik Vitaliy'}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
};

export default Copyright;
