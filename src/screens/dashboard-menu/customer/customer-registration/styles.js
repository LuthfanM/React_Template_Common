import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  main:
  {
    display: 'flex',
  },
  textfield_flex: 
  {
    display: 'flex',
    width: '75%'
  },
  gridMargin: {
    marginTop: 10
  },
  areaOptions:{
    display: 'flex',
    backgroundColor: 'red'
  },
  noRightRadius:{
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
}));