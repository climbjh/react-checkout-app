/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';

// local imports
import ShippingStep from './ShippingStep';
import BillingStep from './BillingStep';
import PaymentStep from './PaymentStep';
import Confirmation from './Confirmation';

const useStyles = makeStyles((theme) => ({
    closeIcon: {
        cursor: "pointer"
    }
}))

const steps = [
    'Shipping',
    'Billing',
    'Payment',
    'Confirm'
]

export type Customer = {
    shipping_first_name: string,
    shipping_last_name: string,
    shipping_address: string,
    shipping_city: string,
    shipping_state: string,
    shipping_zip: string,
    billing_first_name: string,
    billing_last_name: string,
    billing_address: string,
    billing_city: string,
    billing_state: string,
    billing_zip: string,
    pay_with_card: boolean,
    billing_same_as_shipping: boolean,
    payment_option: string,
    bank_name: string,
    account_number: number|null,
    routing_number: number|null,
    card_name: string,
    card_number: number|null,
    card_expiration: string,
    card_cvv: number|null,
    card_zip: number|null
}
const initCustomerInfo: Customer = {
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_address: '',
    shipping_city: '',
    shipping_state: '',
    shipping_zip: '',
    billing_first_name: '',
    billing_last_name: '',
    billing_address: '',
    billing_city: '',
    billing_state: '',
    billing_zip: '',
    pay_with_card: false,
    billing_same_as_shipping: false,
    payment_option: '0',
    bank_name: '',
    account_number: null,
    routing_number: null,
    card_name: '',
    card_number: null,
    card_expiration: '',
    card_cvv: null,
    card_zip: null
}


export default function CheckoutDialog(props) {

    const classes = useStyles();
    const {
        checkoutDialogOpen,
        handleCheckoutDialogClose,
        setSnackbarOpen
    } = props;

    const [ activeStep, setActiveStep ] = useState(0);
    const [ customerInfo, setCustomerInfo ] = useState(initCustomerInfo)

    const handleCustomerInfo = (name: string, value: any) => {
        let newInfo = {...customerInfo};
        newInfo[name] = value;
        setCustomerInfo(newInfo)
        // console.log(newInfo)
    }
    
    const renderStep = (step: number) => {
        switch (step) {
            case 0: return <ShippingStep customerInfo={customerInfo} handleCustomerInfo={handleCustomerInfo} />
            case 1: return <BillingStep customerInfo={customerInfo} handleCustomerInfo={handleCustomerInfo}  />
            case 2: return <PaymentStep customerInfo={customerInfo} handleCustomerInfo={handleCustomerInfo}  />
            case 3: return <Confirmation customerInfo={customerInfo} handleCustomerInfo={handleCustomerInfo}  />
        }
    }

    const getTitle = (step: number) => {
        switch (step) {
            case 0: return('Shipping Information')
            case 1: return('Billing Information')
            case 2: return('Payment Details')
            case 3: return('Order Confirmation')
        }
    }
    
    const resetDialog = () => {
        handleCheckoutDialogClose();
        setActiveStep(0)
        setCustomerInfo(initCustomerInfo)
    }

    const handleConfirm = ():any => {
        resetDialog();
        setSnackbarOpen(true);
    }

    return(
        <Dialog
            fullWidth
            maxWidth='md'
            open={checkoutDialogOpen}
            onClose={()=>resetDialog()}
        >
            <DialogTitle>
                <Grid container direction="row">
                    <Grid item>
                        <Typography variant="h4" color="textSecondary">
                            {getTitle(activeStep)}
                        </Typography>
                    </Grid>
                    <Grid item xs />
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            className={classes.closeIcon}
                            display="inline"
                        >
                            <CloseIcon 
                                onClick={()=>resetDialog()} 
                                fontSize="large"
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={index}>
                                <StepLabel>
                                    {label}
                                </StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                {renderStep(activeStep)}
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={activeStep === 0 ? ()=>resetDialog() : ()=>setActiveStep(activeStep - 1)}>
                    {activeStep === 0 ? 'Close' : 'Back'}
                </Button>
                <Button variant="contained" color="primary" onClick={activeStep === steps.length ? handleConfirm() : ()=>setActiveStep(activeStep + 1)}>
                    {activeStep === steps.length -1 ? 'Confirm' : 'Next'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}