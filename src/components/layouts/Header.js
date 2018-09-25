import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



export default props =>
      <Fragment>
       <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      </Fragment>
