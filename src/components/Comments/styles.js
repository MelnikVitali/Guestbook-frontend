import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 0 auto',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    alertInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preloader: {
        display: 'block',
        margin: '0 auto'
    }
}));

export default useStyles;
