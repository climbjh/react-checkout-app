import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function InfoStep(props) {

    const {
        customerInfo,
        handleCustomerInfo
    } = props;

    return(
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item sm={6}>
                        <TextField 
                            label="First Name" 
                            onChange={(e)=>handleCustomerInfo('shipping_first_name',e.target.value)}
                            variant="outlined"   
                            fullWidth
                            value={customerInfo.shipping_first_name} 
                        >
                            {/* {customerInfo.first_name} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField 
                            label="Last Name" 
                            onChange={(e)=>handleCustomerInfo('shipping_last_name',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.shipping_last_name}
                        >
                            {/* {customerInfo.last_name} */}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <TextField 
                    label="Shipping Address" 
                    onChange={(e)=>handleCustomerInfo('shipping_address',e.target.value)}
                    variant="outlined"
                    fullWidth
                    value={customerInfo.shipping_address}
                >
                    {/* {customerInfo.shipping_address} */}
                </TextField>
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item sm={4}>
                        <TextField 
                            label="City" 
                            onChange={(e)=>handleCustomerInfo('shipping_city',e.target.value)}
                            variant="outlined"   
                            fullWidth
                            value={customerInfo.shipping_city} 
                        >
                            {/* {customerInfo.shipping_city} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField 
                            label="State" 
                            onChange={(e)=>handleCustomerInfo('shipping_state',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.shipping_state}
                        >
                            {/* {customerInfo.shipping_state} */}
                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField 
                            label="Zip Code" 
                            onChange={(e)=>handleCustomerInfo('shipping_zip',e.target.value)}
                            variant="outlined"
                            fullWidth
                            value={customerInfo.shipping_zip}
                        >
                            {/* {customerInfo.shipping_zip} */}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

};