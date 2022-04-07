import React from "react";
import Box from '@mui/material/Box';
import useStyles from "./styles";
import { Typography } from "@mui/material";
import MainCard from "../../../components/cards/MainCard";

const CustomerApproval = (props) => {
  var classes = useStyles();

  return (
    <>
       <Box className={classes.boxContainer}>
          <Typography>Dear Angga ~ This user account already activated</Typography>
          <MainCard>
            <Typography>
              Name
            </Typography>
            <Typography>
              Tony Stark
            </Typography>
            <Typography>
              Tony Stark
            </Typography>
            <Typography>
              Tony Stark
            </Typography>
          </MainCard>
       </Box>
    </>
  );

}


export default CustomerApproval;