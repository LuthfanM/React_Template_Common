import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
    mainCustomer:{
        width: '80%',
        textAlign: 'justify',
        display: 'inline-block',
    },
    boxContainer:
    {
        width: '90%',
        marginTop: 15,
        // display: 'inline-flex',
        backgroundColor: theme.palette.common.white,
        border: '2px solid '+theme.palette.common.black,
        borderRadius: 5,
        padding: 20,
        flexGrow: 1,
        height: 'inherit',
        width: '100%',
        alignSelf: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
          },
    },
    inlineCard:{
        display: 'inline-flex',
        margin: 4,
        width: '98%'
    },
    contentCard:{
        height: '98%',
        display: 'flex'
    }
}));