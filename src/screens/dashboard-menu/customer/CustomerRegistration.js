import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StepLabel from '@mui/material/StepLabel';
import useTranslation from "../../../utils/i18n/translations";
import useStyles from "./styles";

import RegisterNew from "./customer-registration/RegisterNew";
import ReviewSubmit from "./ReviewSubmit";
import ActivationLink from "./ActivationLink";
import GridWrapper from "../../../components/grid/GridWrapper";

const steps = ['register.new.customer', 'review.and.submit', 'activation.link.sent',
  'user.account.activated', 'approvals', 'registration.complete'
];

const CustomerRegistration = (props) => {
  var classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [completed, setCompleted] = React.useState({});

  const i18n = useTranslation();

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

  const generateScreen = () => {
    switch (activeStep) {
      case 0:
        return <RegisterNew />
      case 1:
        return <ReviewSubmit />
      case 2:
        return <ActivationLink />
      case 3:

        break;
      case activeStep.length:

        break;
      default:

        break;
    }
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
        <div className={classes.mainCustomer}>
      <Box className={classes.boxContainer}>
        {
          generateScreen()
        }
      </Box>
        </div>
      {
        <div className={classes.doubleButton}>
          <Button onClick={handleNext} sx={{ mr: 1 }}>
          {i18n["prev"]}
        </Button>
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          {i18n["next"]}
        </Button>
        </div>
      }
    </>
  );

}

export default CustomerRegistration;