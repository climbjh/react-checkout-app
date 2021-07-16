import React from 'react';
import { Customer } from './CheckoutDialog';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

type ConfirmationProps = {
    customerInfo: Customer,
    handleCustomerInfo: (name: string, value: any) => void
}

const useStyles = makeStyles((theme) => ({
    chip: {
        marginLeft: theme.spacing(2)
    }
}))

export default function Confirmation ({ customerInfo, handleCustomerInfo }: ConfirmationProps) {

    const classes = useStyles()

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <Grid item>
                            <Typography variant="h6">
                                <strong>Shipping Address</strong>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.shipping_first_name} {customerInfo.shipping_last_name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.shipping_address}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.shipping_city}, {customerInfo.shipping_state}   {customerInfo.shipping_zip}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item>
                            <Typography variant="h6">
                                <strong>Billing Address</strong>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.billing_same_as_shipping ? customerInfo.shipping_first_name : customerInfo.billing_first_name} {customerInfo.billing_same_as_shipping ? customerInfo.shipping_last_name : customerInfo.billing_last_name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.billing_same_as_shipping ? customerInfo.shipping_address : customerInfo.billing_address}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {customerInfo.billing_same_as_shipping ? customerInfo.shipping_city : customerInfo.billing_city}, {customerInfo.billing_same_as_shipping ? customerInfo.shipping_state : customerInfo.billing_state}   {customerInfo.billing_same_as_shipping ? customerInfo.shipping_zip : customerInfo.billing_zip}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h6" gutterBottom display="inline">
                    <strong>Payment Method</strong>
                </Typography>
                <Chip 
                    className={classes.chip}
                    label={customerInfo.payment_option === '0' ? 'Check' : customerInfo.payment_option === '1' ? 'Bank Transfer' : customerInfo.payment_option === '2' ? 'Venmo' : customerInfo.payment_option === '3' ? 'Credit Card' : null} 
                    color="primary"
                />
                    {customerInfo.payment_option === '0' ? (
                        <Typography variant="body1" color="textSecondary">
                            Check
                        </Typography>
                    ) : null}
                    {customerInfo.payment_option === '2' ? (
                        <Typography variant="body1" color="textSecondary">
                            Venmo
                        </Typography>
                    ) : null}
                    {customerInfo.payment_option === '1' ? (
                        <>
                        <Typography>
                            Bank Name
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.bank_name}
                        </Typography>
                        <Typography>
                            Bank Account Number
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.account_number}
                        </Typography>
                        <Typography>
                            Routing Number
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.routing_number}
                        </Typography>
                        </>
                    ) : null}
                    {customerInfo.payment_option === '3' ? (
                        <>
                        <Typography>
                            Name on Card
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.card_name}
                        </Typography>
                        <Typography>
                            Credit Card Number
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.card_number}
                        </Typography>
                        <Typography>
                            Expiration Date
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {customerInfo.card_expiration}
                        </Typography>
                        </>
                    ) : null}
            </Grid>
        </Grid>
    )

};