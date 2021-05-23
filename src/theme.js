import { createMuiTheme } from '@material-ui/core/styles';
import { pxToRem } from './utils/pxToRem';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html': {
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
                },
                body: {
                    margin: '0 auto',
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    height: '100vh'
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
            },
        },
        MuiFormHelperText: {
            root: {
                minHeight: pxToRem(22)
            }
        }
    },
});

export default theme;
