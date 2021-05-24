import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    zoom: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default useStyles;
