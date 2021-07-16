import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function billingStep(props) {

    const {
        customerInfo,
        handleCustomerInfo
    } = props;

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={customerInfo.billing_same_as_shipping}
                        onChange={(e)=>handleCustomerInfo('billing_same_as_shipping',e.target.checked)}
                        color="primary"
                    />
                }
                label="Is your billing address the same as your shipping address?"
            />
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item sm={6}>
                        <TextField 
                            label="First Name" 
                            onChange={(e)=>handleCustomerInfo('billing_first_name',e.target.value)}
                            variant="outlined"   
                            fullWidth
                            value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_first_name : customerInfo.billing_first_name} 
                        >
                            {/* {customerInfo.billing_first_name} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField 
                            label="Last Name" 
                            onChange={(e)=>handleCustomerInfo('billing_last_name',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_last_name : customerInfo.billing_last_name}
                        >
                            {/* {customerInfo.billing_last_name} */}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <TextField 
                    label="Billing Address" 
                    onChange={(e)=>handleCustomerInfo('billing_address',e.target.value)}
                    variant="outlined"
                    fullWidth
                    value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_address : customerInfo.billing_address}
                >
                    {/* {customerInfo.billing_address} */}
                </TextField>
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item sm={4}>
                        <TextField 
                            label="City" 
                            onChange={(e)=>handleCustomerInfo('billing_city',e.target.value)}
                            variant="outlined"   
                            fullWidth
                            value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_city : customerInfo.billing_city} 
                        >
                            {/* {customerInfo.billing_city} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField 
                            label="State" 
                            onChange={(e)=>handleCustomerInfo('billing_state',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_state : customerInfo.billing_state}
                        >
                            {/* {customerInfo.billing_state} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField 
                            label="Zip Code" 
                            onChange={(e)=>handleCustomerInfo('billing_zip',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.billing_same_as_shipping ? customerInfo.shipping_zip : customerInfo.billing_zip}
                        >
                            {/* {customerInfo.billing_zip} */}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};