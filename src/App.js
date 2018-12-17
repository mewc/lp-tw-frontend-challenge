import React, { Component } from 'react';
import './App.css';
import TwitterList from "./TwitterList";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import dotenv from 'dotenv';
dotenv.config();

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class App extends Component {
  render() {
      const { classes } = this.props;

      return (
      <div className="App">
          <div className={classes.root}>
              <AppBar position="static">
                  <Toolbar>
                      <Typography variant="h6" color="inherit" className={classes.grow}>
                          LIVEPERSON TWITTER CHALLENGE APP
                      </Typography>
                      <Button color="inherit"><a href={'https://mewc.info'} style={{color: '#fff'}}>mewc</a></Button>
                  </Toolbar>
              </AppBar>
          </div>
        <TwitterList/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
