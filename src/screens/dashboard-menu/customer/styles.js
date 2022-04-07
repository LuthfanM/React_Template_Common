import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
    mainCustomer:{
        width: '80%',
        textAlign: 'justify',
        display: 'inline-block',
    },
    doubleButton:{
        display: 'inherit',
        flexDirection: 'row'
    },
    boxContainer:
    {
        width: '90%',
        marginTop: 5,
        // display: 'inline-flex',
        backgroundColor: theme.palette.common.white,
        border: '2px solid '+theme.palette.common.black,
        borderRadius: 5,
        padding: 20,
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
          },
    },
    flexing: 
    {
        width: '90%'
    },
    bold:
    {
        fontWeight: 'bold'
    }
}));