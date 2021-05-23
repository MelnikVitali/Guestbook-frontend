import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(4)
    },
    footer: {
        flex: '0 0 auto',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    }
}));

export default useStyles;
