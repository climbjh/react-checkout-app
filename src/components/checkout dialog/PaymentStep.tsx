import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import VenmoImage from '../../public/venmo.jpg'

const useStyles = makeStyles((theme) => ({
    image: {
        maxHeight: "400px"
    }
}))

export default function PaymentStep(props) {

    const {
        customerInfo,
        handleCustomerInfo
    } = props;

    const classes = useStyles();

    // const [ paymentOption, setPaymentOption ] = useState(customerInfo.payment_option)

    const renderContent = (value) => {
        switch (value) {
            case '0': return(
                <>
                    <Typography variant="body1" >
                        Please mail checks to:               
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        8467 Red Hawk Trail
                        Victor, ID 83455
                    </Typography>
                </>
            );
            case '1': return(
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            label="Name of Bank"
                            variant="outlined"
                            fullWidth
                            value={customerInfo.bank_name}
                            onChange={(e)=>handleCustomerInfo('bank_name',e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Account Number"
                            variant="outlined"
                            fullWidth
                            value={customerInfo.account_number}
                            onChange={(e)=>handleCustomerInfo('account_number',e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Routing Number"
                            variant="outlined"
                            fullWidth
                            value={customerInfo.routing_number}
                            onChange={(e)=>handleCustomerInfo('routing_number',e.target.value)}
                        />
                    </Grid>
                </Grid>
            );
            case '2': return(
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" gutterBottom>
                            Scan QR code with your phone or send to username: 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="textSecondary">
                            @Evan-Matthews-86
                        </Typography>
                    </Grid>
                    <Grid item >
                        <img src={VenmoImage} className={classes.image}/>
                    </Grid>
                </Grid>
            );
            case '3': return(
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            label="Name On Card"
                            variant="outlined"
                            value={customerInfo.card_name}
                            fullWidth
                            onChange={(e)=>handleCustomerInfo('card_name',e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Credit Card Number"
                            variant="outlined"
                            value={customerInfo.card_number}
                            placeholder="eg. 1111 2222 3333 4444"
                            fullWidth
                            onChange={(e)=>handleCustomerInfo('card_number',e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    label="Expiration Date"
                                    variant="outlined"
                                    value={customerInfo.card_expiration}
                                    placeholder="eg. 01/25"
                                    fullWidth
                                    onChange={(e)=>handleCustomerInfo('card_expiration',e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="CVV Number"
                                    variant="outlined"
                                    value={customerInfo.card_cvv}
                                    placeholder="eg. 555"
                                    fullWidth
                                    helperText="This is the 3-digit number on the back of your credit card."
                                    onChange={(e)=>handleCustomerInfo('card_cvv',e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Billing Zip Code"
                                    variant="outlined"
                                    value={customerInfo.card_zip}
                                    placeholder="eg. 55555"
                                    fullWidth
                                    onChange={(e)=>handleCustomerInfo('card_zip',e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            );
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" spacing={2}>
            <Grid item sm={3}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Payment Type</FormLabel>
                    <RadioGroup
                        value={customerInfo.payment_option} 
                        onChange={(e)=>handleCustomerInfo('payment_option', e.target.value)}
                    >
                        <FormControlLabel value={'0'} control={<Radio />} label="Check" />
                        <FormControlLabel value={'1'} control={<Radio />} label="Bank Transfer" />
                        <FormControlLabel value={'2'} control={<Radio />} label="Venmo" />
                        <FormControlLabel value={'3'} control={<Radio />} label="Credit Card" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item sm={9}>
                {renderContent(customerInfo.payment_option)}
            </Grid>
        </Grid>
    )

};