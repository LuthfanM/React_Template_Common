import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
    boxDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
    },
    boxDivSec: {
        display: 'flex',
    },
    progressTypo: {
        display: 'inline-flex'
    }
}));