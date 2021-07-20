/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import CartIcon from '@material-ui/icons/ShoppingCart';

// local
import CheckoutDialog from './components/checkout dialog/CheckoutDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginButton: {
    marginLeft: 'auto'
  },
  cartButton: {
    marginLeft: theme.spacing(2)
  }
}));

function App() {

  const classes = useStyles()
  const [ checkoutDialogOpen, setCheckoutDialogOpen ] = useState(false)
  const [ snackbarOpen, setSnackbarOpen ] = useState(false);

    const handleClose = () => {
        setSnackbarOpen(false);
    };

  const handleCheckoutDialogClose = (): any => {
    setCheckoutDialogOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Tooltip title="Go To Cart">
                <IconButton 
                  edge="start" 
                  color="inherit" 
                  aria-label="menu"
                  className={classes.cartButton}
                  onClick={()=>setCheckoutDialogOpen(true)}
                >
                  <CartIcon fontSize="large"/>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography 
                variant="h5" 
                style={{color: "white"}}
                align="center"
              >
                Checkout Dialog
              </Typography>
            </Grid>
            <Grid item>
              <Button 
                color="inherit"
                className={classes.loginButton} 
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h1">
              TESTING TESTING
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled">
              Your order was submitted successfully!
          </Alert>
      </Snackbar>
      <CheckoutDialog
        checkoutDialogOpen={checkoutDialogOpen}
        handleCheckoutDialogClose={handleCheckoutDialogClose}
        setSnackbarOpen={setSnackbarOpen}
      />
    </div>
  );
}

export default App;
