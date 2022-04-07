import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import Button from '@mui/material/Button';
import StepLabel from '@mui/material/StepLabel';
import useTranslation from "../../../utils/i18n/translations";
import useStyles from "./styles";
import { CreditAnalysis, LoanForm, ReviewSubmit } from "./loan-request";

import SwiperComp from "../../../components/Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from 'swiper/react';
import { Typography } from "@mui/material";
import { LOAN_FORM_AMOUNT } from "../../../utils/constants";
import {VALID, INVALID} from '../../../utils/constants';

const steps = [
    'loan.request.form', 'review.and.submit', 'credit.analysis', 'offering.letter',
    'approvals', 'loan.request.complete'
]

function LoanRequest() {
    const swiperSlide = useSwiperSlide();
    var classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = React.useState({});
    const i18n = useTranslation();
    var loanFormAmount = [INVALID, INVALID, INVALID];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        let newSkipped = skipped;
        // if (isStepSkipped(activeStep)) {
        //   newSkipped = new Set(newSkipped.values()); 
        //   newSkipped.delete(activeStep);
        // }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // setSkipped(newSkipped);
    }

    return (
        <>
            <Stepper activeStep={activeStep} alternativeLabel style={{ width: '100%', padding: 5 }}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel style={{ wordBreak: "break-all" }} {...labelProps}>{i18n[label]}</StepLabel>
                        </Step>
                    );
                })
                }
            </Stepper>
            <Box className={classes.boxContainer}>
                <Card className={classes.inlineCard}>
                    <Typography>Form</Typography>
                <Button>kaks</Button>
                </Card>
                <Card className={classes.contentCard}>
                <SwiperComp>
                    <SwiperSlide>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>asa</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>asa</p>
                    </SwiperSlide>
                </SwiperComp>
                </Card>
            </Box>
        </>
    );
}

export default LoanRequest;