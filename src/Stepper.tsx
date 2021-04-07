import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Completed from './Completed'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

function getsteps() {
    return ['Personal Info', 'Career Info', 'Email'];
}

function getStepContent(stepIndex: number, handleNext: () => void) {
    switch (stepIndex) {
        case 0:
            return <Form1 handleNext={handleNext} />
        case 1:
            return <Form2 handleNext={handleNext} />
        case 2:
            return <Form3 handleNext={handleNext} />
        default:
            return 'Unknown stepIndex'
    }
}

export default function StepperFunction() {
    const classes = useStyles();
    const steps = getsteps();
    const [activeStep, setActiveStep] = useState(0);


    const handleNext = () => {
        setActiveStep((previousStep) => previousStep + 1)
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <div className={classes.root}>
            <div className="Stepper">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((val) => (
                        <Step key={val}>
                            <StepLabel>
                                {val}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            {activeStep === steps.length ? (
                <div>
                    <Completed handleReset={()=>handleReset()}/>
                </div>
            ) : (
                <div>
                    <div className="signup">
                        <p className="heading-2">
                            Signup!
                        </p>
                        <p className="signup-para">Please fill the information correct and fast! Our service is as quick as light.<br />How quick are you in filling the signup form?</p>
                        <div className="line"></div>
                    </div>
                    <div className="forms">
                        <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext)}</Typography>
                    </div>
                </div>
            )}

        </div>
    )
}
