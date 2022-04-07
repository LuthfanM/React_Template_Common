import { Typography, Box, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import useTranslation from "../../../utils/i18n/translations";
import Approver from '../../../components/Approver';

function ReviewSubmit() {
    var classes = useStyles();
    const i18n = useTranslation();

    const title = ["customer.name", "customer.email",
        "customer.mobile.phone",
        "customer.initial.password",
        "customer.type",
        "customer.segment.type"]

    const generateContent = () => {
        let temp = [];
        for(var x=0; x<title.length; x++)
        {
            console.log("===>"+title[x])
            temp.push(
                <div>
                    <Typography variant="body1" gutterBottom className={classes.bold}>
                        {i18n[title[x]]}
                    </Typography>
                </div>
            )
            if(x!=title.length-1)
            {
                temp.push(<Divider />)
            }
        }

        return temp;
    }    

    return (
        <div className={classes.flexing}>
            {
                generateContent()
            }
        </div>
    );
}

export default ReviewSubmit;